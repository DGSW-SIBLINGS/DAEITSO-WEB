import React from "react";
import {
  Headerbox,
  Icon,
  Search,
  Sell,
  Mypage,
  Headersmallbox,
} from "./Header.style";
import Logoicon from "../../assets/img/logowithicon.svg";
import Searchbtn from "../../assets/img/Searchbutton.svg";
import Sellicon from "../../assets/img/Sell_icon.svg";
import Mypageicon from "../../assets/img/Mypage_icon.svg";

export default function Header() {
  return (
    <Headerbox>
      <Headersmallbox>
        <Icon>
          <img className="LogoIcon" alt="" src={Logoicon} />
        </Icon>
        <Search>
          <input id="Search_input" type="text" maxLength="100" />
          <img className="Searchbtn" alt="" src={Searchbtn} />
        </Search>
        <Sell>
          <img className="Sellicon" alt="" src={Sellicon} />
          판매하기
        </Sell>
        <Mypage>
          <img className="Mypageicon" alt="마이페이지" src={Mypageicon} />
          마이페이지
        </Mypage>
      </Headersmallbox>
    </Headerbox>
  );
}
