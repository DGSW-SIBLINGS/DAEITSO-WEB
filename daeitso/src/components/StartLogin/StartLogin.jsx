import React from "react";
import {
  StartLoginBox,
  StartBox,
  StartInBox,
  StartLeftBox,
  StartRightBox,
  StartRight,
  StartImgBox,
  StartBack,
} from "./Start.style";
import Loginbackgounod from "../../assets/img/loginbackground.svg";
import loginIcon from "../../assets/img/loginicon.svg";
import logo from "../../assets/img/logo.svg";
import logowith from "../../assets/img/logotag.svg";

export default function StartLogin() {
  return (
    <StartLoginBox>
      <StartBox>
        <StartBack>
          <img className="Login-background" alt="" src={Loginbackgounod} />
        </StartBack>
        <StartInBox>
          <StartLeftBox>
            <StartImgBox>
              <img className="Login-left-logo" alt="" src={logowith} />
              <img className="Login-img" alt="" src={loginIcon} />
            </StartImgBox>
          </StartLeftBox>
          <StartRightBox>
            <StartRight>
              <img className="Login-logo" alt="" src={logo} />
              <b>나눔으로 이어주는 연결고리</b>
              <text>
                대구소프트웨어마이스터고 신입생 여러분과 동급생, 선배님들을
                환영합니다.
                <br />
                저희 플랫폼은 신입생 여러분들이 좀 더 나은 학교생활을 할 수
                있도록 도와주는 플랫폼입니다.
                <br />
                선배들의 물건, 능력을 물려받고, 더 멋있는 개발자가 되어보세요.
              </text>
              <button>DAuth 로그인</button>
            </StartRight>
          </StartRightBox>
        </StartInBox>
      </StartBox>
    </StartLoginBox>
  );
}
