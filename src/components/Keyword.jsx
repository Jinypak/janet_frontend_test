import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Keyword = () => {
  const [data, setData] = useState({});
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetch("/top20.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setActive(true);
      });
  }, []);
  return (
    <KeywordContainer>
      <div className="keywordTitle">
        <img
          src="https://janet.co.kr/img/common/main/m_main/hot_keyword.png"
          alt=""
        />
        <span>HOT</span> 키워드20
      </div>
      <div className="gridContainer">
        {active
          ? data.map((item, key) => {
              return (
                <div key={key} className="keywordItem">
                  <img src={item.image} alt="" className="keywordImage" />
                  <div
                    className="imgCover"
                    style={{ background: `#${item.color}` }}
                  ></div>
                  <div className="keywordTextBox">
                    <span className="keywordTextTitle">{item.title}</span>
                    <span className="keywordLicense">
                      시행기관 : {item.licenseOrgan}
                    </span>
                    <span className="keywordDay">
                      시험일 : {item.esRegdt.slice(0, 10)}
                    </span>
                    <div className="hoverBox">
                      <span>유형 :</span>
                      <span>접수기간 :</span>
                      <div className="plusIconBox">
                        <img
                          src="https://janet.co.kr/html_demo/img/common/plusB_con.png"
                          alt=""
                          className="plusIcon"
                        />
                      </div>
                    </div>
                    <span className="d_day">D-day</span>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </KeywordContainer>
  );
};

const KeywordContainer = styled.div`
  max-width: 1024px;
  height: 700px;
  margin: 0 auto;
  .keywordTitle {
    text-align: left;
    display: flex;
    align-items: center;
    font-size: 30px;
    span {
      color: #8e74d6;
      font-weight: 900;
    }
  }
  .gridContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    .keywordItem {
      border: 2px solid #ccc;
      position: relative;
      border-radius: 10px;
      .keywordImage {
        position: absolute;
        width: 100%;
        z-index: -1;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
      .imgCover {
        position: absolute;
        width: 100%;
        height: 50%;
        opacity: 0.2;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
      .keywordTextBox {
        height: 200px;
        .keywordTextTitle {
          color: #fff;
          font-weight: bold;
          top: 30%;
          height: 40px;
          width: calc(100% - 30px);
          padding: 0px 15px;
          position: absolute;
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        .keywordLicense {
          top: 60%;
          left: 7%;
          position: absolute;
          font-size: 14.4px;
        }
        .keywordDay {
          top: 70%;
          left: 7%;
          font-size: 12px;
          color: #fb2f2f;
          position: absolute;
        }
        .hoverBox {
          top: 80%;
          display: none;
          left: 0;
          position: absolute;
        }
        .d_day {
          top: 5%;
          position: absolute;
          right: 5%;
          background: #8e74d6;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          border-radius: 20px;
          padding: 5px;
        }
      }
      &:hover {
        border: 2px solid #b6a2ee;
        .hoverBox {
          display: flex;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          flex-direction: column;
          height: 252px;
          position: absolute;
          bottom: 0;
          background: #fff;
          z-index: 9999;
          width: 100%;
          border: 2px solid #b6a2ee;
          border-top: none;
          left: -2px;
          span {
            padding: 10px 20px;
          }
          .plusIconBox {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 30px;
            border-top-left-radius: 5px;
            border-bottom-right-radius: 10px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #b6a2ee;
            .plusIcon {
            }
          }
        }
      }
    }
  }
`;

export default Keyword;
