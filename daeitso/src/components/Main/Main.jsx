import React,{useState,useEffect} from "react";
import * as M from "./Main.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BannerImg } from "./Main.style";
import banner from "../../assets/img/banner1.svg";
import banner2 from "../../assets/img/banner2.svg";
import banner3 from "../../assets/img/banner3.svg";
import minibanner from "../../assets/img/minibanner.svg";
import Component from "../../components/Main/Main_Component";
const images = [
  banner,
  banner2,
  banner3,
];

function Main() {
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

  return (
    <>
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        arrows: true,
        pagination: false,
        interval: 3000,
        speed: 1000,
      }}
    >
      {images.map((img) => {
        return (
          <SplideSlide key={img}>
            <BannerImg style={{ marginBottom: "10px" }}>
              <img src={img} />
            </BannerImg>
          </SplideSlide>
        );
      })}
    </Splide>
    <M.MainWrap>
    <M.Minibanner src={minibanner}></M.Minibanner>
    <M.Subtitle>오늘 등록된 상품</M.Subtitle>
    <M.ComponentWrap>
    {
        data.map((a,i)=>{
            return <Component post={a} key={i}></Component>
        })
    }
    
    </M.ComponentWrap>
    <M.Subtitle>오늘 등록된 상품</M.Subtitle>
    <M.ComponentWrap>
    {
        data.map((a,i)=>{
            return <Component post={a} key={i}></Component>
        })
    }
    
    </M.ComponentWrap>
    
    </M.MainWrap>
    </>

  );
}
export default Main;