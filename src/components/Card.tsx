import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faLaptop,
  faCalendarMinus,
} from "@fortawesome/free-solid-svg-icons";

function Card() {
  return (
    <CardContainer>
      <div className="label">유료</div>
      <div className="title">
        취준생을 위한 현직자 IT 직무 특강 취준생을 위한 현직자 IT 직무
        특강취준생을 위한 현직자 IT 직무 특강취준생을 위한 현직자 IT 직무
        특강취준생을 위한 현직자 IT 직무 특강취준생을 위한 현직자 IT 직무
        특강취준생을 위한 현직자 IT 직무 특강취준생을 위한 현직자 IT 직무 특강
      </div>
      <div className="description">asdfsffasfdsaf</div>
      <div className="info">
        <div className="content">
          <div className="icon-text-container">
            <div className="icon-container">
              <FontAwesomeIcon className="icon fa-fw" icon={faChartColumn} />
            </div>
            <div className="text">난이도 : 미설정</div>
          </div>
          <div className="icon-text-container">
            <div className="icon-container">
              <FontAwesomeIcon className="icon fa-fw" icon={faLaptop} />
            </div>
            <div className="text">수업 : 온라인</div>
          </div>
          <div className="icon-text-container">
            <div className="icon-container">
              <FontAwesomeIcon className="icon fa-fw" icon={faCalendarMinus} />
            </div>
            <div className="text">기간 : 무제한</div>
          </div>
        </div>
        <div className="logo-container">
          <img src="" alt="classLogo" />
        </div>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 296px;
  height: 338px;
  border-radius: 8px;
  padding: 28px 24px;
  box-sizing: border-box;
  background-color: white;

  .label {
    font-size: 12px;
    font-weight: bold;
    color: #524fa1;
    margin: 5px 0px;
  }

  .title {
    display: -webkit-box;
    width: 100%;
    margin: 5px 0px;
    font-size: 18px;
    font-weight: bold;
    color: #222;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .description {
    display: -webkit-box;
    margin: 20px 0px;
    font-size: 14px;
    color: #5e5f61;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .icon-text-container {
    display: flex;
    align-items: center;
    background-color: white;

    .icon-container {
      font-size: 24px;
      margin-right: 8px;
    }

    .text {
      font-size: 12px;
      color: #7d7e80;
    }
  }

  .logo-container {
    img {
      width: 52px;
      height: 52px;
      object-fit: contain;
    }
  }
`;

export default Card;
