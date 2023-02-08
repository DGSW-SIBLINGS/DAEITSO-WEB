import styled from "styled-components";

export const UploadBox = styled.div``;
export const UploadList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: pretendard;
`;
export const UploadTop = styled.div`
  display: flex;
  margin-left: -35px;
  margin-bottom: 25px;
  font-family: pretendard;
`;
export const UploadName = styled.div`
  display: flex;
  flex-direction: column;
  font-family: pretendard;
  b {
    font-size: 14px;
    font-family: pretendard;
  }
  input {
    width: 400px;
    height: 44px;
    background-color: #f2f2f2;
    border: 0;
    margin-right: 20px;
    font-family: pretendard;
    text-indent: 10px;
  }
`;
export const UploadPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: pretendard;
  b {
    font-size: 14px;
    font-family: pretendard;
  }
  input {
    width: 288px;
    height: 44px;
    background-color: #f2f2f2;
    border: 0;
    font-family: pretendard;
    text-indent: 10px;
  }
`;

export const UploadPrice = styled.div`
  display: flex;
  .priceBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 288px;
    height: 44px;
    background-color: #f2f2f2;
  }
  button {
    font-size: 20px;
    border: 0;
    margin-right: -10px;
    background-color: #f2f2f2;
    border: 1px solid black;
    border-radius: 100px;
  }
`;

export const UploadPriceBt = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 15px;
  font-family: pretendard;
  button {
    display: flex;
    width: 80px;
    height: 44px;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    border: 0;
    font-family: pretendard;
  }
`;
export const Uploadmiddle = styled.div`
  margin-left: -30px;
  margin-bottom: 25px;
  font-family: pretendard;
`;
export const UploadInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: pretendard;
  b {
    font-size: 14px;
    font-family: pretendard;
  }
  textarea {
    width: 805px;
    height: 80px;
    resize: none;
    background-color: #f2f2f2;
    border: 0;
    font-family: pretendard;
    text-indent: 10px;
    font-size: 14px;
  }
`;
export const UploadBottom = styled.div`
  display: flex;
  margin-left: -30px;
  font-family: pretendard;
`;
export const UploadTag = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  b {
    font-size: 14px;
    font-family: pretendard;
  }

  .open {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 390px;
    height: 44px;
    border: 0;
  }

  .lacatagbt {
    border: 0;
    height: 22px;
    background-color: #f8f8f8;
  }
  .lacatagbt:hover {
    background-color: #3d8af5;
  }
`;
export const UploadLo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: pretendard;
  b {
    font-size: 14px;
    font-family: pretendard;
  }
  select {
    width: 393px;
    height: 44px;
    background-color: #f2f2f2;
    border: 0;
    font-family: pretendard;
  }
  .opentag {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 393px;
    height: 44px;
    border: 0;
  }

  .t {
    border: 0;
    height: 22px;
    background-color: #f8f8f8;
  }
  .t:hover {
    background-color: #3d8af5;
  }
`;

export const UploadBtBox = styled.div`
  font-family: pretendard;
`;
