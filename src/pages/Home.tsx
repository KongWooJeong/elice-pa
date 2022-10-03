import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";

import { courseListSelector } from "../store/course";
import { pageInfo } from "../store/course";

import SearchBox from "../components/SearchBox";
import Filter from "../components/Filter";
import Spacing from "../components/Spacing";
import CardList from "../components/CardList";
import Card from "../components/Card";
import Pagenation from "../components/Pagenation";

function Home() {
  const [page, setPage] = useState<number>(1);
  const courseInfo = useRecoilValue(courseListSelector);
  const [pageData, setPageData] = useRecoilState(pageInfo);

  useEffect(() => {
    setPageData({
      currentPage: page,
      lastPage: Math.ceil(courseInfo.data.course_count / 20),
      offset: (page - 1) * 20,
      count: 20,
    });
  }, [page]);

  return (
    <HomeContainer>
      <SearchBox />
      <Spacing height="12" />
      <Filter
        title="가격"
        optionList={[
          { type: "price", value: "무료", status: "free" },
          { type: "price", value: "유료", status: "paid" },
        ]}
      />
      <Spacing height="12" />
      <div className="total-count">{`전체 ${courseInfo.data["course_count"]}개`}</div>
      <CardList>
        {courseInfo.data.courses.map((course) => {
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
        pageList={courseInfo.pageList}
        lastPage={courseInfo.lastPage}
        currentPage={pageData.currentPage}
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
