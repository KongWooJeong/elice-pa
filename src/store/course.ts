import { atom } from "recoil";

interface Course {
  id: string;
  enroll_type: number;
  title: string;
  short_description: string;
  logo_file_url: string;
}

interface PriceCondition {
  isFree: boolean;
  isPaid: boolean;
}

export interface CourseInfo {
  courseList: Course[];
  condition: {
    price: PriceCondition;
  };
}

const initialState = {
  courseList: [],
  condition: {
    price: {
      isFree: false,
      isPaid: false,
    },
  },
};

export const course = atom<CourseInfo>({
  key: "course",
  default: initialState,
});
