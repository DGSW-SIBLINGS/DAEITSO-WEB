import styled from "styled-components";

export const MainWrap = styled.div`
height:200px;
box-sizing: border-box;
background-color: aliceblue;
display: flex;
align-items: center;
flex-direction: column;

`
export const BannerImg = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 1155px;
    height: 300px;
  }
`;

export const Minibanner = styled.img`
    width: 1155px;
    height:200px;
    
`
export const Subtitle = styled.div`
    color:black;
    font-weight: 500;
    font-size:1.4em;
    font-family: Pretendard;
    width:1155px;

`
export const ComponentWrap = styled.div`
display: flex;
flex-direction: row;
width:1155px;
height:300px;
margin-right: 10px;
`