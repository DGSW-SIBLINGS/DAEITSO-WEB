import styled from "styled-components";

export const StartLoginBox = styled.div`
  display: flex;
`;
export const StartBox = styled.div`
  display: flex;
`;

export const StartBack = styled.div`
  display: flex;
  .Login-background {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
  }
`;
export const StartInBox = styled.div`
  display: flex;
  justify-content: center;
  z-index: 20;
  height: 100vh;
  width: 100vw;
`;
export const StartLeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StartImgBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  background-color: #ecf4fe;
  .Login-img {
    width: 500px;
    margin-left: -50px;
  }

  .Login-left-logo {
    width: 75px;
    margin-left: 30px;
    margin-top: 40px;
  }
`;

export const StartRightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StartRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  height: 600px;
  background-color: white;
  .Login-logo {
    width: 80px;
    margin-left: 101px;
    margin-bottom: 5px;
  }

  b {
    font-size: 22px;
    margin-left: 100px;
    margin-bottom: 10px;
  }

  text {
    color: #949494;
    font-size: 12px;
    margin-left: 100px;
    margin-bottom: 100px;
  }

  button {
    width: 200px;
    height: 38px;
    margin-left: 100px;
    color: white;
    background-color: #3d8af5;
    border: 0;
    border-radius: 50px;
  }
`;
