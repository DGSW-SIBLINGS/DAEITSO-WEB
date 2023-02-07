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
              <img></img>
              <img></img>
            </StartImgBox>
          </StartLeftBox>
          <StartRightBox>
            <StartRight>
              <h1></h1>
              <b></b>
              <text></text>
            </StartRight>
          </StartRightBox>
        </StartInBox>
      </StartBox>
    </StartLoginBox>
  );
}
