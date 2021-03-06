import React, { useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [middleSlideIndex, setMiddleSlideIndex] = useState(0);
  const [rankSlideIndex, setRankSlideIndex] = useState(0);
  const navigate = useNavigate();
  const handleLink = (url) => {
    navigate(`/${url}`);
  };
  const handleArrow = (part, direction) => {
    if (part === "middle" && direction === "left") {
      setMiddleSlideIndex(middleSlideIndex > 0 ? middleSlideIndex - 1 : 5);
    } else if (part === "middle" && direction === "right") {
      setMiddleSlideIndex(middleSlideIndex < 5 ? middleSlideIndex + 1 : 0);
    }

    if (part === "rank" && direction === "left") {
      setRankSlideIndex(rankSlideIndex > 0 ? rankSlideIndex - 1 : 5);
    } else if (part === "rank" && direction === "right") {
      setRankSlideIndex(rankSlideIndex < 5 ? rankSlideIndex + 1 : 0);
    }
    console.log(middleSlideIndex, rankSlideIndex);
  };
  return (
    <NavContainer
      middleSlideIndex={middleSlideIndex}
      rankSlideIndex={rankSlideIndex}
    >
      <div className="navInnerContainer">
        <Splide
          className="navAutoSliderBox"
          options={{
            perPage: 1,
            arrows: false,
            pagination: false,
            autoplay: true,
            pauseOnHover: true,
            interval: 3000,
          }}
        >
          <SplideSlide className="sliderItem">
            <img
              src="https://janet.co.kr/img/common/main/banner/mainBn_top_01.png"
              alt=""
              onClick={() => handleLink("link")}
            />
          </SplideSlide>
          <SplideSlide className="sliderItem">
            <img
              src="https://janet.co.kr/img/common/main/banner/mainBn_top_02.png"
              alt=""
              onClick={() => handleLink("link")}
            />
          </SplideSlide>
          <SplideSlide className="sliderItem">
            <img
              src="https://janet.co.kr/img/common/main/banner/mainBn_top_03.png"
              alt=""
              onClick={() => handleLink("link")}
            />
          </SplideSlide>
          <SplideSlide className="sliderItem">
            <img
              src="https://janet.co.kr/img/common/main/banner/mainBn_top_04.png"
              alt=""
            />
          </SplideSlide>
        </Splide>
        <>
          <div className="navManualContainer" style={{ width: "490px" }}>
            <Arrow
              className="arrow"
              direction="left"
              onClick={() => handleArrow("middle", "left")}
            >
              &nbsp;&lt;
            </Arrow>
            <Arrow
              className="arrow"
              direction="right"
              onClick={() => handleArrow("middle", "right")}
            >
              &nbsp;&gt;
            </Arrow>
            <Splide
              className="navManualSliderBox"
              options={{
                perPage: 1,
                arrows: false,
                pagination: false,
                rewind: true,
              }}
            >
              <SplideSlide className="sliderIteminfoBox">
                <h3>?????? info</h3>
                <div className="gridContainer">
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/bMagazine.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>???????????????</h4>
                      <p>????????? ????????? ?????????</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/bNews.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>??????</h4>
                      <p>????????? ????????????????</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/event.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>??????????????????</h4>
                      <p>????????? ??????????????? ?????????!</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/ad_info.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>??????????????? ????????????</h4>
                      <p>???????????? ?????? ?????? ??????</p>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sliderIteminfoBox">
                <h3>????????????</h3>
                <div className="gridContainer">
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/bBest.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>????????????</h4>
                      <p>????????? ?????? ???????????? ??????</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/hot_issue.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>????????? ?????????</h4>
                      <p>????????? ???????????? ????????????????</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/bFree.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>???????????????</h4>
                      <p>???????????? ????????? ????????? ??????</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/bHumor.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>???????????????</h4>
                      <p>????????? ????????? ??????????????????</p>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sliderIteminfoBox">
                <h3>??????</h3>
                <div className="gridContainer">
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/ai_rcmd.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>?????? AI ??????</h4>
                      <p>AI ????????? ?????? ????????? ??????</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/jprs_test.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>JPRS ?????? ?????????</h4>
                      <p>??? ????????? ?????? ?????????????</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/job_test.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>???????????? ?????????</h4>
                      <p>?????? ?????? ??????????</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/big5_test.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>Oxford BIG5 ?????????</h4>
                      <p>????????? ?????? ????????? ????????????????</p>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sliderIteminfoBox">
                <h3>?????????</h3>
                <div
                  className="gridContainer custom"
                  style={{
                    gridTemplateColumns: "repeat(3, 1fr)",
                  }}
                >
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/bQna.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>?????? ?????????</h4>
                      <p>???????????? ???????????????!</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/janettv.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>?????? TV</h4>
                      <p>????????? ??????????????? ????????????</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/faq.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>FAQ</h4>
                      <p>????????? ?????? ?????????????</p>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sliderIteminfoBox">
                <h3>?????? ?????? ??????????</h3>
                <div className="gridContainer">
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/jnTown1.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>??????????????????</h4>
                      <p>????????? ?????? ?????? ??????????</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/jnTown2.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>?????????????????? info</h4>
                      <p>???????????? ?????? ?????? ????????????!</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/jnTown3.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>??????????????????</h4>
                      <p>????????? ???????????? ??????????????????!</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/jnTown4.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>????????????</h4>
                      <p>??? ?????? ????????? ?????? ????????????</p>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sliderIteminfoBox">
                <h3>????????? ??????</h3>
                <div className="gridContainer">
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/inCrfc.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>???????????????</h4>
                      <p>?????????????????? ?????? ???</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/iCrtfc.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>???????????????</h4>
                      <p>???????????? ????????? ??????????????????.</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/sCrtfc.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>????????? ?????????</h4>
                      <p>????????? ?????? ????????? ?????? ????????????</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/rCrtfc.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>??????????????????</h4>
                      <p>??????/?????? ??????????????????</p>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
            <img
              src="https://janet.co.kr/data/ebslider/eb4_basic/img/d0942d969f0a37cb73a46db345ea874b.png"
              alt=""
              className="manualImage"
            />
          </div>
        </>
        <div className="navManualContainer" style={{ width: "200px" }}>
          <Arrow
            className="arrow"
            direction="left"
            onClick={() => handleArrow("rank", "left")}
          >
            &nbsp;&lt;
          </Arrow>
          <Arrow
            className="arrow"
            direction="right"
            onClick={() => handleArrow("rank", "right")}
          >
            &nbsp;&gt;
          </Arrow>
          <Splide
            className="navManualSliderBox"
            options={{
              perPage: 1,
              arrows: false,
              pagination: false,
            }}
          >
            <SplideSlide className="rankSlideItem">
              <h3>????????? ??? Top 10</h3>
              <ol>
                <Link to="*">
                  <span>1</span>2??? ??????????????? ?????????
                </Link>
                <Link to="*">
                  <span>2</span>?????? ?????? ??????
                </Link>
                <Link to="*">
                  <span>3</span>??????????????? K-POP
                </Link>
                <Link to="*">
                  <span>4</span>ai ????????? ???????????????
                </Link>
                <Link to="*">
                  <span>5</span>????????? ?????? ????????????
                </Link>
                <Link to="*">
                  <span>6</span>???????????? ????????? ?????????{" "}
                </Link>
                <Link to="*">
                  <span>7</span>???????????? ????????? ?????????
                </Link>
                <Link to="*">
                  <span>8</span>20??? ???????????? ??????
                </Link>
                <Link to="*">
                  <span>9</span>?????? ????????? ????????????
                </Link>
                <Link to="*">
                  <span>10</span>???????????? ?????? ??????
                </Link>
              </ol>
            </SplideSlide>
            <SplideSlide className="rankSlideItem">
              <h3>????????? Top 10</h3>
              <ol>
                <Link to="*">
                  <span>1</span>?????? ???????????? ?????????
                </Link>
                <Link to="*">
                  <span>2</span>ai ????????? ???????????????
                </Link>
                <Link to="*">
                  <span>3</span>????????? ????????? ????????????
                </Link>
                <Link to="*">
                  <span>4</span>?????? ?????? ??????????????????
                </Link>
                <Link to="*">
                  <span>5</span>??? ???????????? ???????????????
                </Link>
                <Link to="*">
                  <span>6</span>?????? ?????? ????????? ??????
                </Link>
                <Link to="*">
                  <span>7</span>?????? ?????? ?????? ?????????
                </Link>
                <Link to="*">
                  <span>8</span>20??? ???????????? ??????
                </Link>
                <Link to="*">
                  <span>9</span>?????? ???????????? ??????????
                </Link>
                <Link to="*">
                  <span>10</span>?????????........
                </Link>
              </ol>
            </SplideSlide>
            <SplideSlide className="rankSlideItem">
              <h3>????????? ????????????</h3>
              <ol>
                <Link to="*">
                  <span>1</span>?????????????????????
                </Link>
                <Link to="*">
                  <span>2</span>????????????????????????
                </Link>
                <Link to="*">
                  <span>3</span>???????????????
                </Link>
                <Link to="*">
                  <span>4</span>??????????????????
                </Link>
                <Link to="*">
                  <span>5</span>???????????????
                </Link>
                <Link to="*">
                  <span>6</span>?????????????????????
                </Link>
                <Link to="*">
                  <span>7</span>?????????????????????????????????
                </Link>
                <Link to="*">
                  <span>8</span>?????????????????????
                </Link>
                <Link to="*">
                  <span>9</span>????????????????????????????????????
                </Link>
                <Link to="*">
                  <span>10</span>???????????????
                </Link>
              </ol>
            </SplideSlide>
            <SplideSlide className="rankSlideItem">
              <h3>???????????? ????????????</h3>
              <ol>
                <Link to="*">
                  <span>1</span>?????????????????????
                </Link>
                <Link to="*">
                  <span>2</span>??????????????????
                </Link>
                <Link to="*">
                  <span>3</span>???????????????????????????
                </Link>
                <Link to="*">
                  <span>4</span>??????????????????????????????
                </Link>
                <Link to="*">
                  <span>5</span>????????????????????????
                </Link>
                <Link to="*">
                  <span>6</span>??????????????????
                </Link>
                <Link to="*">
                  <span>7</span>????????????????????????
                </Link>
                <Link to="*">
                  <span>8</span>???????????????????????????
                </Link>
                <Link to="*">
                  <span>9</span>????????????????????????(????????????)
                </Link>
                <Link to="*">
                  <span>10</span>??????????????????????????????
                </Link>
              </ol>
            </SplideSlide>
            <SplideSlide className="rankSlideItem">
              <h3>?????? ????????????</h3>
              <ol>
                <Link to="*">
                  <span>1</span>????????????
                </Link>
                <Link to="*">
                  <span>2</span>??????????????????
                </Link>
                <Link to="*">
                  <span>3</span>?????????????????????
                </Link>
                <Link to="*">
                  <span>4</span>??????????????????
                </Link>
                <Link to="*">
                  <span>5</span>????????????
                </Link>
                <Link to="*">
                  <span>6</span>??????????????????
                </Link>
                <Link to="*">
                  <span>7</span>??????????????????(????????????)
                </Link>
                <Link to="*">
                  <span>8</span>???????????????????????????
                </Link>
                <Link to="*">
                  <span>9</span>??????????????????????????????
                </Link>
                <Link to="*">
                  <span>10</span>????????????????????????
                </Link>
              </ol>
            </SplideSlide>
            <SplideSlide className="rankSlideItem">
              <h3>????????? ????????????</h3>
              <ol>
                <Link to="*">
                  <span>1</span>??????????????????
                </Link>
                <Link to="*">
                  <span>2</span>???????????????
                </Link>
                <Link to="*">
                  <span>3</span>???????????????
                </Link>
                <Link to="*">
                  <span>4</span>???????????????
                </Link>
                <Link to="*">
                  <span>5</span>?????????????????????
                </Link>
                <Link to="*">
                  <span>6</span>???????????????????????????
                </Link>
                <Link to="*">
                  <span>7</span>???????????????????????????
                </Link>
                <Link to="*">
                  <span>8</span>????????????????????????
                </Link>
                <Link to="*">
                  <span>9</span>?????????????????????
                </Link>
                <Link to="*">
                  <span>10</span>?????????????????????
                </Link>
              </ol>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background: linear-gradient(
    to right,
    rgba(173, 207, 255, 0.25) 0%,
    rgba(173, 206, 255, 0.25) 1%,
    rgba(181, 176, 248, 0.25) 50%,
    rgba(187, 143, 240, 0.25) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  .navInnerContainer {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    .navAutoSliderBox {
      width: 420px;
      margin-top: 20px;
      img {
        width: 100%;
        cursor: pointer;
      }
    }
    .navManualContainer {
      margin: 20px 7px;
      padding-bottom: 30px;
      background: #fff;
      position: relative;
      .manualImage {
        position: absolute;
        left: 7%;
        bottom: 5%;
      }
      .navManualSliderBox {
        max-height: 200px;
        position: relative;
        padding: 20px;
        .sliderIteminfoBox {
          transform: translateX(-${(props) => props.middleSlideIndex * 100}%);
          transition: all 0.5s;
          h3 {
            margin-left: 20px;
          }
          .gridContainer {
            width: 90%;
            margin: 10px auto;
            grid-gap: 20px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            .slideGridBox {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              img {
                width: 30%;
                padding-right: 10px;
              }
              a {
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-decoration: none;
                color: #000;
                font-size: 12px;
              }
            }
          }
          .custom {
            .slideGridBox {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              a {
                text-align: center;
                font-size: 12px;
              }
            }
          }
        }
        background: #fff;
      }
      .rankSlideItem {
        padding: 5px;
        transform: translateX(-${(props) => props.rankSlideIndex * 100}%);
        transition: all 0.5s;
        h3 {
          font-size: 14px;
        }
        ol {
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 5px;
          margin: 0 auto;
          a {
            text-decoration: none;
            font-size: 12px;
            padding-top: 2px;
            color: #000;
            white-space: nowrap;
            span {
              color: #ccc;
              margin-right: 5px;
              border: none;
            }
          }
          a:hover {
            border-bottom: 1px solid #000;
            span {
              border: none;
            }
          }
        }
      }
    }
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 10%;
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: space-between;
  right: ${(props) => (props.direction === "right" ? "15px" : " 35px")};
  z-index: 9999;
  background: #fff;
  margin: auto;
  border: 1px solid #ccc;
  color: #8e74d6;
  cursor: pointer;
`;

export default Nav;
