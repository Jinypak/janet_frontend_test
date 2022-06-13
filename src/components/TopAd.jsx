import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const TopAd = () => {
  return (
    <AdContainer>
      <Splide
        className="adManualSlideBox"
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
        }}
      >
        <SplideSlide className="adManualSlideItem">
          <img
            src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_01.png"
            alt=""
          />
        </SplideSlide>
        <SplideSlide className="adManualSlideItem">
          <img
            src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_02.png"
            alt=""
          />
        </SplideSlide>
        <SplideSlide className="adManualSlideItem">
          <img
            src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_03.png"
            alt=""
          />
        </SplideSlide>
        <SplideSlide className="adManualSlideItem">
          <img
            src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_04.png"
            alt=""
          />
        </SplideSlide>
        <SplideSlide className="adManualSlideItem">
          <img
            src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_05.png"
            alt=""
          />
        </SplideSlide>
        <SplideSlide className="adManualSlideItem">
          <img
            src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_06.png"
            alt=""
          />
        </SplideSlide>
      </Splide>
    </AdContainer>
  );
};

const AdContainer = styled.div`
  .adManualSlideBox {
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px;
    .adManualSlideItem {
      padding: 10px;
      width: 30%;
      cursor: pointer;
      img {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;

export default TopAd;
