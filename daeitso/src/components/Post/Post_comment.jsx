import React from "react";
import styled from "styled-components";
import banner from "../../assets/img/fixedbanner.svg";

const CommentWrap = styled.div`
width:1100px;
height:120px;
border-top: 1px solid black;
border-bottom: 1px solid black;
`
const CommentInfo = styled.div`
display: flex;
flex-direction: row;
width:300px;
padding:15px;
font-family: pretendard;
`
const CommentImg = styled.img`
width:40px;
height:40px;
border-radius: 100%;
background-color: #777777;
margin-right:5px;
`
const CommentName = styled.div`
    font-size:1.2rem;
    font-family: pretendard;
    color:black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right:5px;
`
const CommentDate = styled.div`
    font-size:0.9rem;
    font-family: pretendard;
    color:black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5px;
`
const CommentContent = styled.div`
        font-size:1rem;
    font-family: pretendard;
    color:black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right:10px;
    margin-left:25px;
`
function Post_comment(){
    return(
        <>
        <CommentWrap>
            <CommentInfo>
                <CommentImg alt='none' src={banner}></CommentImg>
                <CommentName>김예림</CommentName>
                <CommentDate>2023.02.06</CommentDate>
            </CommentInfo>
            <CommentContent>혹시 판매 되었나요??</CommentContent>
        </CommentWrap>
        </>
    )
}
export default Post_comment;