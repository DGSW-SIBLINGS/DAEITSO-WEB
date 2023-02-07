import styled from "styled-components";

// export const Headerbox = styled.div`
//   border-bottom: 1px solid #606060;
//   height: 5vh;
//   margin-bottom: 1%;
// `;
// export const Headersmallbox = styled.div`
//   margin-top: 1%;
// `;
// export const Icon = styled.div`
//   float: left;
//   margin-top: -0.4%;
//   margin-left: 17%;
//   cursor: pointer;
//   .LogoIcon {
//     width: 100px;
//   }
// `;
// export const Search = styled.div`
//   float: left;
//   margin-left: 10%;
//   input {
//     margin-top: -2%;
//     width: 25vw;
//     height: 3.3vh;
//     font-size: 16px;
//     border: 2px solid blue;
//   }
//   . img {
//     margin-top: auto;
//     margin-left: -10%;
//     align-items: center;
//     cursor: pointer;
//   }
// `;
// export const Sell = styled.div`
//   float: left;
//   margin-left: 15%;
//   margin-right: 1%;
//   margin-top: -0.5%;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;
// export const Mypage = styled.div`
//   float: left;
//   margin-left: 4%;
//   margin-right: 1%;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;

export const Headerbox = styled.div``;
export const Headersmallbox = styled.div`
  display: flex;
  height: 70px;
  border-bottom: 1px solid #c7c7c7;
  align-items: center;
  justify-content: center;
  /* justify-content: space-evenly; */
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
