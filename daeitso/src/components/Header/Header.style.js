import styled from "styled-components";

export const Headerbox = styled.div``;
export const Headersmallbox = styled.div`
  display: flex;
  height: 70px;
  border-bottom: 1px solid #c7c7c7;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
`;
export const Icon = styled.div`
  display: flex;
  font-family: Pretendard;
  cursor: pointer;
  .LogoIcon {
    width: 90px;
    margin-right: 230px;
  }
`;
export const Search = styled.div`
  display: flex;
  background-color: #F4F4F4;
  width: 310px;
  font-family: Pretendard;
  margin-right:150px;
  cursor: pointer;
  input {
    width: 250px;
    height: 35px;
    border: 0;
    margin-left: 12px;
    background-color: #F4F4F4;

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
  margin-left: 100px;
  font-family: Pretendard;
  cursor: pointer;
  .Sellicon {
    width: 30px;
    margin-right: 10px;
  }
`;
export const Mypage = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  font-family: Pretendard;
  cursor: pointer;
  .Mypageicon {
    width: 20px;
    margin-right: 10px;
  }
`;
