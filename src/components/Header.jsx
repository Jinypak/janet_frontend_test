import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderInnerBox from "./HeaderInnerBox";

const Header = () => {
  const [active, setActive] = useState(false);
  const [activeBox, setActiveBox] = useState(false);
  const [infoActive, setInfoActive] = useState(true);
  const [talkActive, setTalkActive] = useState(true);
  const [activeInput, setActiveInput] = useState(false);

  const navigate = useNavigate();
  const handleLogo = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <div className="headerTop">
        <img
          onClick={() => handleLogo()}
          src="https://janet.co.kr/html_demo/img/common/logo.png"
          className="logo"
          alt="logo"
        />
        <div className="inputContainer">
          <div
            className={
              activeInput ? "inputBox activeInputBox" : "inputBox initialBox"
            }
            onClick={() => setActiveInput(true)}
          >
            <span>통합검색</span>
            <input type="text" placeholder="자격증 꿀팁 보러가기 #취준 #취뽀" />
            <img
              src="https://janet.co.kr/html_demo/img/common/mainSrchBtn.png"
              alt=""
            />
          </div>
        </div>

        <ul className="menuBox">
          <Link to="/register">
            <img
              src="https://janet.co.kr/img/common/header/member.png"
              alt=""
            />
            <span>회원가입</span>
          </Link>
          <Link to="/login">
            <img src="https://janet.co.kr/img/common/header/login.png" alt="" />
            <span>로그인</span>
          </Link>
          <Link to="/company">
            <img
              src="https://janet.co.kr/img/common/header/company.png"
              alt=""
            />
            <span>기업서비스</span>
          </Link>
        </ul>
      </div>
      <div className="headerBottom">
        <div className="gnbMenuBtn">
          <img
            src="https://janet.co.kr/img/common/header/gnb.png"
            alt=""
            onClick={() => setActiveBox(!activeBox)}
          />
        </div>
        <ul className="categoryList">
          <Link to="/top" className="categoryListItem">
            Top100
          </Link>
          <Link to="/info">자격증 정보</Link>
          <Link to="/lang">어학/공무원</Link>
          {infoActive ? (
            <Link to="/info2" onMouseEnter={() => setInfoActive(false)}>
              자넷 info
            </Link>
          ) : (
            <img
              onMouseLeave={() => setInfoActive(true)}
              src="https://janet.co.kr/img/common/gnbInfo.png"
              alt=""
            />
          )}

          {talkActive ? (
            <Link to="/talk" onMouseEnter={() => setTalkActive(false)}>
              자넷 톡
            </Link>
          ) : (
            <img
              onMouseLeave={() => setTalkActive(true)}
              src="https://janet.co.kr/img/common/gnbTalk.png"
              alt=""
            />
          )}
        </ul>
        <div className="gnbLinkBox">
          {/* Link 태그로 링크 적용 가능 */}
          <div className="gnbLink">
            <img src="https://janet.co.kr/img/common/header/aca.png" alt="" />
          </div>
          <div className="gnbLink">
            <img src="https://janet.co.kr/img/common/header/commu.png" alt="" />
          </div>
          <div
            className="gnbLink"
            onMouseOver={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <img src="https://janet.co.kr/img/common/header/ai.png" alt="" />
            {active ? (
              <span className="modalAi custom">추천 테스트</span>
            ) : null}
          </div>
        </div>
      </div>
      {activeBox && <HeaderInnerBox />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  .headerTop {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 1024px;
    justify-content: space-between;
    align-items: center;
    .logo {
      flex: 1;
      max-width: 100px;
      cursor: pointer;
    }
    .inputContainer {
      flex: 7;
      display: flex;
      .activeInputBox {
        flex: 7;
      }
      .initialBox {
        width: 400px;
        span {
          min-width: 50px;
        }
      }
      .inputBox {
        height: 37px;
        border: 2px solid #706efe;
        border-radius: 40px;
        display: flex;
        align-items: center;
        margin: 20px;
        padding: 0 5px;
        span {
          border-right: 1px solid #ccc;
          flex: 0.8;
          text-align: center;
          color: #838383;
          font-size: 12px;
        }
        input {
          border: none;
          flex: 6;
          padding-left: 10px;
        }
        input:focus {
          outline: none;
        }
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
    .menuBox {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        text-decoration: none;
        color: #000;
        display: flex;
        flex-direction: column;
        margin: 0 5px;
        white-space: nowrap;
        cursor: pointer;
        img {
          height: 15px;
          width: 15px;
          margin: 0 auto;
        }
        span {
          margin-top: 3px;
          font-size: 12px;
          color: #979797;
        }
      }
      a:hover {
        color: #ccc;
        text-decoration: none;
        img {
          opacity: 0.76;
        }
      }

      a:link {
        text-decoration: none;
      }
      a:visited {
        text-decoration: none;
      }
    }
  }
  .headerBottom {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 1024px;
    justify-content: space-between;
    align-items: center;
    .gnbMenuBtn {
      flex: 1;
      cursor: pointer;
    }
    .categoryList {
      flex: 6;
      display: flex;
      margin-left: -20px;
      align-items: center;
      a {
        text-decoration: none;
        margin: 0 5px;
        cursor: pointer;
        transition: all 0.2s;
        color: #000;
      }
      a:hover {
        color: #706efe;
        text-decoration: none;
      }
      img {
        height: 20px;
        padding-bottom: 3px;
        cursor: pointer;
      }
    }
    .gnbLinkBox {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      .gnbLink {
        margin: 10px 10px;
        cursor: pointer;
        position: relative;
        .modalAi {
          position: absolute;
          top: -30px;
          white-space: nowrap;
          left: 0;
          padding: 2px 5px;
          border-radius: 20px;
          background: #706efe;
          color: #fff;
        }
      }
    }
  }
`;

export default Header;
