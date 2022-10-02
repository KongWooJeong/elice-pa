import React from "react";
import styled from "styled-components";

interface Props {
  pageList: number[];
  lastPage: number;
  currentPage: number;
  setPage: (page: number) => void;
}

function Pagenation({ pageList, lastPage, currentPage, setPage }: Props) {
  return (
    <PagenationCotainer>
      <div className="pageIndex-list">
        <button
          className={
            currentPage === 1 ? "arrow-button-disabled" : "arrow-button"
          }
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {pageList.map((page) => (
          <button
            className={currentPage === page ? "button-highlight" : ""}
            key={page}
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={
            currentPage === lastPage ? "arrow-button-disabled" : "arrow-button"
          }
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === lastPage}
        >
          &gt;
        </button>
      </div>
    </PagenationCotainer>
  );
}

const PagenationCotainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0px;

  button {
    width: 24px;
    height: 24px;
    color: #999;
    border: none;
    appearance: none;
    cursor: pointer;
  }

  .button-highlight {
    background-color: #524fa1;
    color: white;
  }

  .arrow-button {
    color: #222;
  }

  .arrow-button-disabled {
    color: #ccc;
  }
`;

export default Pagenation;
