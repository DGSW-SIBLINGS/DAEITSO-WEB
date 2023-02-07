import React from "react";
import Header from "../../components/Header/Header";
import * as M from "./Mypage.style";
import {useMyfile} from "../../hooks/useMyfile"
import { useState } from "react";
import plus from "../../assets/img/plus.svg";
import tag from "../../assets/img/tag.svg";
import update from "../../assets/img/updatebtn.svg";
import Component from "../Main/Main_Component";
function Mypage() {
    const {handleChangeFile} = useMyfile();
    const [data,setData] = useState([
        {
            title:"햄버거 팝니다",
            imgUrls:[
               {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKhqpzZUj7Gjc0AmulXvFbmbBj0fu6YxbqQ&usqp=CAU"}],
        category:"FOOD",
        content:"아 집가고 싶다",
        price:3600,
        freeShare:"SALE",
        place:"PLAYGROUND"
    },
    {
        title:"햄버거 팝니다",
        imgUrls:[
           {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKhqpzZUj7Gjc0AmulXvFbmbBj0fu6YxbqQ&usqp=CAU"}],
    category:"FOOD",
    content:"아 집가고 싶다",
    price:3600,
    freeShare:"SALE",
    place:"PLAYGROUND"
},
{
    title:"햄버거 팝니다",
    imgUrls:[
       {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKhqpzZUj7Gjc0AmulXvFbmbBj0fu6YxbqQ&usqp=CAU"}],
category:"FOOD",
content:"아 집가고 싶다",
price:3600,
freeShare:"SALE",
place:"PLAYGROUND"
},
{
    title:"햄버거 팝니다",
    imgUrls:[
       {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKhqpzZUj7Gjc0AmulXvFbmbBj0fu6YxbqQ&usqp=CAU"}],
category:"FOOD",
content:"아 집가고 싶다",
price:3600,
freeShare:"SALE",
place:"PLAYGROUND"
},
{
    title:"햄버거 팝니다",
    imgUrls:[
       {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKhqpzZUj7Gjc0AmulXvFbmbBj0fu6YxbqQ&usqp=CAU"}],
category:"FOOD",
content:"아 집가고 싶다",
price:3600,
freeShare:"SALE",
place:"PLAYGROUND"
},{
    title:"햄버거 팝니다",
    imgUrls:[
       {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKhqpzZUj7Gjc0AmulXvFbmbBj0fu6YxbqQ&usqp=CAU"}],
category:"FOOD",
content:"아 집가고 싶다",
price:3600,
freeShare:"SALE",
place:"PLAYGROUND"
}
    ])
    return(
        <>
            <Header />
            <M.MypageWrap>
            <M.Row>
            <div className="filebox">
                <input type="file" id="file" style={{display:"none"}} onChange={handleChangeFile}/>
                <M.Imginput>
                    <img src={plus} style={{width:50}}/>
                </M.Imginput>
                <img src={update} style={{marginTop:-50 ,marginLeft:60}}/>
            </div>
            <M.Column>
            <M.Name>최희건</M.Name>
            <M.Email>choiheegun@dgsw.hs.kr</M.Email>
            <M.NumberWrap>
                <img src={tag} style={{width:20}}/>
                <M.Number>1학년 1반 18번</M.Number>
                </M.NumberWrap>
            </M.Column>
            </M.Row>
            <M.Subtitle>내가 등록한 상품</M.Subtitle>
            <M.ComponentWrap>
            {
                data.map((a,i)=>{
                return <Component post={a} key={i}></Component>
                     })
            }
            </M.ComponentWrap>
            <M.Subtitle>나의 관심 상품</M.Subtitle>
            <M.ComponentWrap>
            {
                data.map((a,i)=>{
                return <Component post={a} key={i}></Component>
                     })
            }
            </M.ComponentWrap>
    
            </M.MypageWrap>
        
        </>
    )
}

export default Mypage;