import React from "react";
import Logoicon from "../../assets/img/logowithicon.svg";
import Searchbtn from "../../assets/img/Searchbutton.svg";
import Sellicon from "../../assets/img/Sell_icon.svg";
import Mypageicon from "../../assets/img/Mypage_icon.svg";
import * as H from "./Header.style";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const onClickupload = () => {
    navigate("/upload");
  };

  const onClickmain = () => {
    navigate("/main");
  };
  return (
    <H.Headerbox>
      <H.Headersmallbox>
        <H.Icon onClick={onClickmain}>
          <img className="LogoIcon" alt="" src={Logoicon} />
        </H.Icon>
        <H.Search>
          <input className="Search-input" />
          <img className="Searchbtn" alt="" src={Searchbtn} />
        </H.Search>
          <img className="Sellicon" alt="" src={Sellicon} />
          판매하기
        <H.Mypage>
          <img className="Mypageicon" alt="마이페이지" src={Mypageicon} />
          마이페이지
        </H.Mypage>
      </H.Headersmallbox>
    </H.Headerbox>
  );
}
