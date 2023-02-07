import React from "react";
import styled from "styled-components";

const ComponentWrap = styled.div`
width:180px;
height:260px;
margin-right: 10px;
background-color: #f2f2f2;
`
function Component(props){
    return(
        <>{
            console.log(props.post.content)
        }
        <ComponentWrap>d</ComponentWrap>
        </>
    )
}

export default Component;