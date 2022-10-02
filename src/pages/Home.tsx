import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import SearchBox from "../components/SearchBox";
import Filter from "../components/Filter";
import Spacing from "../components/Spacing";
import CardList from "../components/CardList";
import Card from "../components/Card";
import Pagenation from "../components/Pagenation";

interface Course {
  id: number;
  enroll_type: number;
  is_free: boolean;
  title: string;
  short_description: string;
  logo_file_url: string;
}

interface ClassInfo {
  course_count: number;
  courses: Course[];
}

function Home() {
  const [classInfo, setClassInfo] = useState<ClassInfo>({
    course_count: 0,
    courses: [],
  });
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [pageList, setPageList] = useState<number[]>([]);

  useEffect(() => {
    async function getClassList() {
      try {
        const { data } = await axios.get(
          `https://api-rest.elice.io/org/academy/course/list/?offset=${
            (page - 1) * 20
          }&count=20`
        );

        const startPage = Math.max(page - 4, 1);
        const endPage = Math.min(page + 4, Math.ceil(data.course_count / 20));
        const pageArr = [];

        for (let i = startPage; i <= endPage; i++) {
          pageArr.push(i);
        }

        setPageList(pageArr);
        setClassInfo(data);
        setLastPage(Math.ceil(data.course_count / 20));
      } catch (error) {
        console.log(error);
      }
    }

    getClassList();
  }, [page]);

  return (
    <HomeContainer>
      <SearchBox />
      <Spacing height="12" />
      <Filter />
      <Spacing height="12" />
      <div className="total-count">{`전체 ${classInfo["course_count"]}개`}</div>
      <CardList>
        {classInfo.courses.map((course) => {
          let label = "";

          if (course.enroll_type === 0) {
            label = course.is_free ? "무료" : "유료";
          } else if (course.enroll_type === 4) {
            label = "구독";
          }

          return (
            <Card
              key={course.id}
              label={label}
              title={course.title}
              description={course.short_description}
              logo={course.logo_file_url}
            />
          );
        })}
      </CardList>
      <Pagenation
        pageList={pageList}
        lastPage={lastPage}
        currentPage={page}
        setPage={setPage}
      />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;

  .content {
    width: 100%;
    background-color: gray;
  }

  .total-count {
    margin: 12px 0px;
    font-weight: bold;
    font-size: 14px;
  }

  @media only screen and (min-width: 1280px) {
    width: 1280px;
    margin: 0 auto;
  }
`;

export default Home;
