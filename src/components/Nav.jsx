import React, { useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [middleSlideIndex, setMiddleSlideIndex] = useState(0);
  const [rankSlideIndex, setRankSlideIndex] = useState(0);
  const navigate = useNavigate();
  const handleLink = () => {
    navigate("*");
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
              onClick={() => handleLink()}
            />
          </SplideSlide>
          <SplideSlide className="sliderItem">
            <img
              src="https://janet.co.kr/img/common/main/banner/mainBn_top_02.png"
              alt=""
              onClick={() => handleLink()}
            />
          </SplideSlide>
          <SplideSlide className="sliderItem">
            <img
              src="https://janet.co.kr/img/common/main/banner/mainBn_top_03.png"
              alt=""
              onClick={() => handleLink()}
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
                <h3>자넷 info</h3>
                <div className="gridContainer">
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/bMagazine.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>자넷매거진</h4>
                      <p>다양한 자격증 매거진</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/bNews.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>뉴스</h4>
                      <p>오늘의 최신뉴스는?</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/event.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>청년지원정책</h4>
                      <p>다양한 지원정책을 한눈에!</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/ad_info.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>공인중개사 원서접수</h4>
                      <p>가장빠른 원서 접수 꿀팁</p>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sliderIteminfoBox">
                <h3>커뮤니티</h3>
                <div className="gridContainer">
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/bBest.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>베스트글</h4>
                      <p>자넷의 인기 베스트글 모음</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/hot_issue.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>오늘의 핫이슈</h4>
                      <p>핫이슈 키워드가 궁금하다면?</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/bFree.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>자유게시판</h4>
                      <p>자유로운 주제를 나누는 공간</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/bHumor.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>유머게시판</h4>
                      <p>나만의 유머를 소통해보세요</p>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sliderIteminfoBox">
                <h3>추천</h3>
                <div className="gridContainer">
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/ai_rcmd.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>자넷 AI 추천</h4>
                      <p>AI 분석을 통한 자격증 추천</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/jprs_test.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>JPRS 추천 테스트</h4>
                      <p>내 성향에 맞는 자격증은?</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/job_test.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>직업성향 테스트</h4>
                      <p>내게 맞는 직업은?</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/big5_test.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>Oxford BIG5 테스트</h4>
                      <p>자세한 직업 분석이 필요하다면?</p>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sliderIteminfoBox">
                <h3>자넷톡</h3>
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
                      <h4>자넷 질문톡</h4>
                      <p>궁금증을 풀어드려요!</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/janettv.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>자넷 TV</h4>
                      <p>자넷의 영상컨텐츠 살펴보기</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/faq.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>FAQ</h4>
                      <p>자넷에 대해 궁금할땐?</p>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sliderIteminfoBox">
                <h3>우리 동네 학원은?</h3>
                <div className="gridContainer">
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/jnTown1.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>맞춤학원검색</h4>
                      <p>나에게 맞는 맞춤 학원은?</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/jnTown2.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>우리동네학원 info</h4>
                      <p>우리동네 학원 소식 살펴보기!</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/jnTown3.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>학원찾아드림</h4>
                      <p>학원을 비교해서 선택해보세요!</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/jnTown4.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>지도보기</h4>
                      <p>내 주변 자격증 학원 찾아보기</p>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sliderIteminfoBox">
                <h3>자격증 정보</h3>
                <div className="gridContainer">
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/inCrfc.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>자격증정보</h4>
                      <p>자격증정보의 모든 것</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/iCrtfc.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>계열별정보</h4>
                      <p>자격증에 대하여 알려드립니다.</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/sCrtfc.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>자격증 공모전</h4>
                      <p>자격증 관련 공모전 정보 확인하기</p>
                    </Link>
                  </div>
                  <div className="slideGridBox">
                    <img
                      src="https://janet.co.kr/html_demo/img/main/rCrtfc.png"
                      alt=""
                    />
                    <Link to="*" className="sliderInnerTextBox">
                      <h4>시험접수안내</h4>
                      <p>필기/실기 기본접수안내</p>
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
              <h3>베스트 글 Top 10</h3>
              <ol>
                <Link to="*">
                  <span>1</span>2급 생활스포츠 지도사
                </Link>
                <Link to="*">
                  <span>2</span>직업 적성 결과
                </Link>
                <Link to="*">
                  <span>3</span>유튜브에서 K-POP
                </Link>
                <Link to="*">
                  <span>4</span>ai 테스트 후기입니다
                </Link>
                <Link to="*">
                  <span>5</span>강남역 근처 미용학원
                </Link>
                <Link to="*">
                  <span>6</span>동물들은 죽음의 공포를{" "}
                </Link>
                <Link to="*">
                  <span>7</span>얼마전에 장르만 로맨스
                </Link>
                <Link to="*">
                  <span>8</span>20대 카톡방에 숨은
                </Link>
                <Link to="*">
                  <span>9</span>우리 강디좀 봐주세요
                </Link>
                <Link to="*">
                  <span>10</span>산소에서 만난 낯선
                </Link>
              </ol>
            </SplideSlide>
            <SplideSlide className="rankSlideItem">
              <h3>핫클릭 Top 10</h3>
              <ol>
                <Link to="*">
                  <span>1</span>자넷 커뮤니티 사용자
                </Link>
                <Link to="*">
                  <span>2</span>ai 테스트 후기입니다
                </Link>
                <Link to="*">
                  <span>3</span>아몬드 브리즈 아시나요
                </Link>
                <Link to="*">
                  <span>4</span>다들 오늘 집가시자마자
                </Link>
                <Link to="*">
                  <span>5</span>왜 여기에는 최신글보기
                </Link>
                <Link to="*">
                  <span>6</span>이제 슬슬 가을이 오나
                </Link>
                <Link to="*">
                  <span>7</span>점심 메뉴 머가 좋을까
                </Link>
                <Link to="*">
                  <span>8</span>20대 카톡방에 숨은
                </Link>
                <Link to="*">
                  <span>9</span>다들 반려동물 키우니?
                </Link>
                <Link to="*">
                  <span>10</span>있잖아........
                </Link>
              </ol>
            </SplideSlide>
            <SplideSlide className="rankSlideItem">
              <h3>기능사 인기순위</h3>
              <ol>
                <Link to="*">
                  <span>1</span>한식조리기능사
                </Link>
                <Link to="*">
                  <span>2</span>지게차운전기능사
                </Link>
                <Link to="*">
                  <span>3</span>전기기능사
                </Link>
                <Link to="*">
                  <span>4</span>위험물기능사
                </Link>
                <Link to="*">
                  <span>5</span>지적기능사
                </Link>
                <Link to="*">
                  <span>6</span>광산보안기능사
                </Link>
                <Link to="*">
                  <span>7</span>방사선비파괴검사기능사
                </Link>
                <Link to="*">
                  <span>8</span>수산양식기능사
                </Link>
                <Link to="*">
                  <span>9</span>반도체장비유지보수기능사
                </Link>
                <Link to="*">
                  <span>10</span>영사기능사
                </Link>
              </ol>
            </SplideSlide>
            <SplideSlide className="rankSlideItem">
              <h3>산업기사 인기순위</h3>
              <ol>
                <Link to="*">
                  <span>1</span>위험물산업기사
                </Link>
                <Link to="*">
                  <span>2</span>전기산업기사
                </Link>
                <Link to="*">
                  <span>3</span>제품디자인산업기사
                </Link>
                <Link to="*">
                  <span>4</span>건설기계정비산업기사
                </Link>
                <Link to="*">
                  <span>5</span>사출금형산업기사
                </Link>
                <Link to="*">
                  <span>6</span>영사산업기사
                </Link>
                <Link to="*">
                  <span>7</span>철도신호산업기사
                </Link>
                <Link to="*">
                  <span>8</span>시각디자인산업기사
                </Link>
                <Link to="*">
                  <span>9</span>소방설비산업기사(기계분야)
                </Link>
                <Link to="*">
                  <span>10</span>생산화자동화산업기사
                </Link>
              </ol>
            </SplideSlide>
            <SplideSlide className="rankSlideItem">
              <h3>기사 인기순위</h3>
              <ol>
                <Link to="*">
                  <span>1</span>전기기사
                </Link>
                <Link to="*">
                  <span>2</span>산업안전기사
                </Link>
                <Link to="*">
                  <span>3</span>위험물산업기사
                </Link>
                <Link to="*">
                  <span>4</span>전기산업기사
                </Link>
                <Link to="*">
                  <span>5</span>건축기사
                </Link>
                <Link to="*">
                  <span>6</span>건설안전기사
                </Link>
                <Link to="*">
                  <span>7</span>소방설비기사(전기분야)
                </Link>
                <Link to="*">
                  <span>8</span>제품디자인산업기사
                </Link>
                <Link to="*">
                  <span>9</span>건설기계정비산업기사
                </Link>
                <Link to="*">
                  <span>10</span>사출금형산업기사
                </Link>
              </ol>
            </SplideSlide>
            <SplideSlide className="rankSlideItem">
              <h3>기능장 인기순위</h3>
              <ol>
                <Link to="*">
                  <span>1</span>위험물기능장
                </Link>
                <Link to="*">
                  <span>2</span>전기기능장
                </Link>
                <Link to="*">
                  <span>3</span>가스기능장
                </Link>
                <Link to="*">
                  <span>4</span>용접기능장
                </Link>
                <Link to="*">
                  <span>5</span>기계가공기능장
                </Link>
                <Link to="*">
                  <span>6</span>건설기계정비기능장
                </Link>
                <Link to="*">
                  <span>7</span>건축일반시공기능장
                </Link>
                <Link to="*">
                  <span>8</span>귀금속가공기능장
                </Link>
                <Link to="*">
                  <span>9</span>금형제작기능장
                </Link>
                <Link to="*">
                  <span>10</span>판금제관기능장
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
