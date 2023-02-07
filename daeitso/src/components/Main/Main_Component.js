import React from "react";
import styled from "styled-components";

const ComponentWrap = styled.div`
width:180px;
height:260px;
margin-right: 10px;
background-color: #f2f2f2;

`

const ComponentTitle = styled.div`
font-family: pretendard;
font-size:1rem;
color:black;
font-weight: 600;
margin:5px;

`
const ComponentContent = styled.div`
font-family: pretendard;
font-size:0.8rem;
color:black;
font-weight: 500;
margin:5px;

`
const ComponentTag = styled.div`
font-family: pretendard;
font-size:0.8rem;
color:#3D8AF5;
font-weight: 500;
margin:5px;
margin-top:10px;
`
function Component(props){
    return(
        <>{
            console.log(props.post.imgUrls[0].imgUrl)
        }
        <ComponentWrap>
            <img alt = "none" src={props.post.imgUrls[0].imgUrl} style={{width:180,height:180}}></img>
            <ComponentTitle>{props.post.title}</ComponentTitle>
            <ComponentContent>{props.post.price}원</ComponentContent>
            <ComponentTag>#{props.post.category}</ComponentTag>
        </ComponentWrap>
        </>
    )
}

export default Component;