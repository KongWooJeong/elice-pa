import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cloneDeep } from "lodash";
import styled from "styled-components";

import { conditionInfo, pageInfo } from "../store/course";

interface Option {
  type: string;
  value: string;
  status: string;
}

interface Props {
  title: string;
  optionList: Option[];
}

function Filter({ title, optionList }: Props) {
  const [condition, setCondition] = useRecoilState(conditionInfo);
  const setPageInfo = useSetRecoilState(pageInfo);

  useEffect(() => {
    setPageInfo({
      currentPage: 1,
      lastPage: 0,
      offset: 0,
      count: 20,
    });
  }, [condition]);

  return (
    <FilterContainer>
      <div className="filter-options">{title}</div>
      <div className="filter-contents">
        {optionList.map((option, index) => (
          <Chip
            key={index}
            className={condition[option.type][option.status] ? "active" : ""}
            onClick={() => {
              const newCondtion = cloneDeep(condition);
              const { type, status } = option;

              newCondtion[type][status] = !newCondtion[type][status];

              setCondition(newCondtion);
            }}
          >
            {option.value}
          </Chip>
        ))}
      </div>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: flex;
  border: 1px solid rgb(225, 226, 228);
  background-color: white;

  .active {
    background-color: rgb(82, 79, 161);
    color: white;
  }

  .filter-options {
    display: flex;
    align-items: center;
    min-width: 6rem;
    padding: 12px;
    background-color: rgb(249, 250, 252);
    border-right: 1px solid rgb(225, 226, 228);
    font-size: 14px;
  }

  .filter-contents {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const Chip = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  margin: 10px;
  padding: 0 14px;
  border: 1px solid rgb(240, 241, 243);
  border-radius: 32px;
  font-size: 14px;
  color: rgb(21, 22, 24);
  background: rgb(240, 241, 243);
  cursor: pointer;
`;

export default Filter;
