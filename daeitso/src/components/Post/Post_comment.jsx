import React from "react";
import styled from "styled-components";

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
`
const CommentImg = styled.img`
width:40px;
height:40px;
border-radius: 100%;
`
const CommentName = styled.div`
    font-size:1.2rem;
    font-family: pretendard;
    color:black;
`
const CommentDate = styled.div`
    font-size:0.9rem;
    font-family: pretendard;
    color:black;
`
function Post_comment(){
    return(
        <>
        <CommentWrap>
            <CommentInfo>
                <CommentImg></CommentImg>
                <CommentName></CommentName>
                <CommentDate></CommentDate>
            </CommentInfo>
        </CommentWrap>
        </>
    )
}
export default Post_comment;