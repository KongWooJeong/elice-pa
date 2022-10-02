import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBox() {
  return (
    <SearchWrapper>
      <div className="icon-container">
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
      </div>
      <div className="text-container">
        <input
          type="text"
          placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        />
      </div>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 0;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 4px;
  background-color: white;

  .icon-container {
    .icon {
      margin: 0px 12px;
    }
  }

  .text-container {
    width: 100%;

    input {
      width: 100%;
      border: none;
      outline: none;
      box-sizing: border-box;

      ::placeholder {
        margin: 12px 0;
        color: gray;
      }
    }
  }
`;

export default SearchBox;
