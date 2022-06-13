import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <span>현재 페이지는 준비중입니다.</span>
      <Link to="/">메인으로 돌아가기</Link>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 32px;
  }
  a {
    color: #000;
    padding-top: 40px;
    text-decoration: none;
    border-bottom: 2px solid #000;
  }
`;
export default NotFound;
