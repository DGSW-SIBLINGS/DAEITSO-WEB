import styled from "styled-components";

export const Imginput = styled.label.attrs(props=>({

    for:"file",
}))`
    background-color:#FF6600;
    border-radius: 4px;
    color: white;
    cursor: pointer;
width:100px;
height:100px;
background-color: #3D8AF5;
border-radius: 200px;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
export const Name = styled.div`
font-family: pretendard;
color:black;
font-size:1.4em;
font-weight: 600;
margin:5px;
`
export const Number = styled.div`
font-family: pretendard;
color:black;
font-size:1.2em;
font-weight: 600;
margin:5px;
`
export const NumberWrap = styled.div`
display:flex;
flex-direction: row;
`
export const Email = styled.div`
font-family: pretendard;
color:#A3A3A3;
font-size:1em;
font-weight: 400;
margin:5px;
`
export const MypageWrap = styled.div`
display: flex;
flex-direction: column;
padding-left:382px;
`
export const Row = styled.div`
display: flex;
flex-direction: row;
margin-Top:40px;
`
export const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left:20px;
`
export const Subtitle = styled.div`
    color:black;
    font-weight: 500;
    font-size:1.4em;
    font-family: Pretendard;
    width:1155px;
    margin-top:20px ;
    margin-bottom:10px ;
    padding-bottom:10px;
    border-bottom: 2px solid #E5E4E4;
`
export const ComponentWrap = styled.div`
display: flex;
flex-direction: row;
width:1155px;
height:300px;
`