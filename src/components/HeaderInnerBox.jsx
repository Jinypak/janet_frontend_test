import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderInnerBox = () => {
  return (
    <InnerContainer>
      <div className="innerBox">
        <li>
          <h4>자격증 정보</h4>
          <Link to="*">직무별 자격증</Link>
          <Link to="*">계열별 정보</Link>
          <Link to="*">국제자격증</Link>
          <Link to="*">자격증일정</Link>
          <Link to="*">시험접수안내</Link>
          <Link to="*">학점은행제</Link>
          <Link to="*">과정평가형 자격</Link>
          <Link to="*">직업정보검색</Link>
          <Link to="*">직업사전</Link>
          <Link to="*">국가자격대여 근절캠페인</Link>
        </li>
        <li>
          <h4>어학/공무원</h4>
          <Link to="*">어학</Link>
          <Link to="*">어학 원서접수 안내</Link>
          <Link to="*">공무원</Link>
          <Link to="*">공무원 원서접수 안내</Link>
        </li>
        <li>
          <h4>자넷info</h4>
          <Link to="*">자넷뉴스</Link>
          <Link to="*">자넷매거진</Link>
          <Link to="*">큐넷 이용안내</Link>
          <Link to="*">청년지원정책</Link>
          <Link to="*">자격증 공모전</Link>
          <Link to="*">국가혜택정보</Link>
          <Link to="*">대학별 자격특전</Link>
        </li>
        <li>
          <h4>자넷톡</h4>
          <Link to="*">자격증 토론방</Link>
          <Link to="*">일반 토론방</Link>
          <Link to="*">FAQ</Link>
          <Link to="*">자넷TV</Link>
          <h4>우리동네학원</h4>
          <Link to="*">맞춤학원검색</Link>
          <Link to="*">학원 찾아드림</Link>
          <Link to="*">우리동네학원 info</Link>
        </li>
        <li>
          <h4>자넷 추천</h4>
          <Link to="*">추천테스트</Link>
          <Link to="*">추천AI</Link>
          <Link to="*">커뮤니티</Link>
        </li>
        <li>
          <h4>MY PAGE</h4>
          <Link to="*">나의 자격증</Link>
          <Link to="*">자넷톡</Link>
          <Link to="*">즐겨찾기</Link>
          <Link to="*">나의정보수정</Link>
          <Link to="*">자격증정보수정</Link>
        </li>
      </div>
    </InnerContainer>
  );
};

const InnerContainer = styled.div`
  border-top: 0.3px solid #ccc;
  .innerBox {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    li {
      border: 0.3px solid #ccc;
      flex: 1.5;
      text-decoration: none;
      padding: 10px;
      list-style: none;
      h4 {
        color: #000;
        font-weight: bold;
        font-size: 18px;
        padding: 10px;
      }
      a {
        color: #000;
        font-size: 13px;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        padding: 9px;
      }
      a:hover {
        text-decoration: none;
        color: #ccc;
      }
      a:visited {
        text-decoration: none;
      }
    }
  }
`;

export default HeaderInnerBox;
