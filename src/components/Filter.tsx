import React from "react";
import styled from "styled-components";

function Filter() {
  return (
    <FilterContainer>
      <div className="filter-options">가격</div>
      <div className="filter-contents">
        <Chip>무료</Chip>
        <Chip>유료</Chip>
      </div>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: flex;
  border: 1px solid rgb(225, 226, 228);

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
