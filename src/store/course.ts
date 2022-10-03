import { atom, selector } from "recoil";
import axios from "axios";

interface Course {
  id: string;
  enroll_type: number;
  title: string;
  short_description: string;
  logo_file_url: string;
  is_free: boolean;
}

interface CourseInfo {
  course_count: number;
  courses: Course[];
}

interface PageInfo {
  currentPage: number;
  lastPage: number;
  offset: number;
  count: number;
}

interface PriceCondition {
  [index: string]: boolean;
  free: boolean;
  paid: boolean;
}

interface Condition {
  [index: string]: PriceCondition;
  price: PriceCondition;
}

interface SearchKeyword {
  keyword: string;
}

interface filterPrice {
  enroll_type: number;
  is_free: boolean;
}

export const course = atom<CourseInfo>({
  key: "course",
  default: {
    course_count: 0,
    courses: [],
  },
});

export const conditionInfo = atom<Condition>({
  key: "conditionInfo",
  default: {
    price: {
      free: false,
      paid: false,
    },
  },
});

export const pageInfo = atom<PageInfo>({
  key: "pageInfo",
  default: {
    currentPage: 0,
    lastPage: 0,
    offset: 0,
    count: 20,
  },
});

export const searchKeyword = atom<SearchKeyword>({
  key: "searchKeyword",
  default: {
    keyword: "",
  },
});

interface Result {
  data: CourseInfo;
  pageList: number[];
  lastPage: number;
}

export const courseListSelector = selector<Result>({
  key: "courseListSelector",
  get: async ({ get }) => {
    const { offset, currentPage } = get(pageInfo);
    const { price } = get(conditionInfo);
    const { keyword } = get(searchKeyword);

    const priceCondtionList: filterPrice[] = [];

    Object.entries(price).forEach(([key, value]) => {
      if (value) {
        if (key === "free") {
          const info = { enroll_type: 0, is_free: true };
          priceCondtionList.push(info);
        }

        if (key === "paid") {
          const info = { enroll_type: 0, is_free: false };
          priceCondtionList.push(info);
        }
      }
    });

    const queryList = [];

    if (keyword && keyword !== "") {
      queryList.push({ title: `%${keyword}%` });
    }

    queryList.push({ $or: [...priceCondtionList] });

    const filterCondtion = JSON.stringify({
      $and: queryList,
    });

    const { data } = await axios.get(
      `https://api-rest.elice.io/org/academy/course/list/?filter_conditions=${filterCondtion}&offset=${offset}&count=20`
    );

    const startPage = Math.max(currentPage - 4, 1);
    const endPage = Math.min(
      currentPage + 4,
      Math.ceil(data.course_count / 20)
    );
    const pageArr = [];

    for (let i = startPage; i <= endPage; i++) {
      pageArr.push(i);
    }

    return {
      data,
      pageList: pageArr,
      lastPage: Math.ceil(data.course_count / 20),
    };
  },
});
