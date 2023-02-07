import styled from "styled-components";

export const Headerbox = styled.div``;
export const Headersmallbox = styled.div`
  display: flex;
  height: 70px;
  border-bottom: 1px solid #c7c7c7;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.div`
  display: flex;
  .LogoIcon {
    width: 90px;
    margin-right: 80px;
  }
`;
export const Search = styled.div`
  display: flex;
  border: 2.5px solid #2e35e4;
  width: 310px;
  input {
    width: 250px;
    height: 35px;
    border: 0;
    margin-left: 12px;
  }
  input:focus {
    outline: none;
  }
  img {
    margin-left: 15px;
  }
`;
export const Sell = styled.div`
  display: flex;
  align-items: center;
  margin-left: 200px;
  .Sellicon {
    width: 30px;
    margin-right: 6px;
  }
`;
export const Mypage = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  .Mypageicon {
    width: 20px;
    margin-right: 6px;
  }
`;
