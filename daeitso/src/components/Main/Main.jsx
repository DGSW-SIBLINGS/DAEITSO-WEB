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
import { customAxios } from "../../lib/axios/customAxios";


const images = [
  banner,
  banner2,
  banner3,
];

function Main() {
    const [data,setData] = useState([{}])
    const request = async () => {
      try{
        const {data} = await customAxios.get('/post');
        setData(data.data);
      } catch (error){
        console.log(error);
      }
    }
    useEffect(()=>{
      request();
    },[]);
      return (
    <>
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        arrows: false,
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
    <Splide
      options={{
        type: "loop",
        autoplay: false,
        arrows: true,
        pagination: false,
        interval: 3000,
        speed: 1000,
        width:1155,
        perPage:6,
      }}
    >
    {
      data.map((a,i)=>{
        return (
          <SplideSlide key={i}>
            <Component post={a} key={i}></Component>
          </SplideSlide>
        );
      })
    }
    </Splide>
    </M.ComponentWrap>
    <M.Subtitle>도서 카테고리 상품</M.Subtitle>
    <M.ComponentWrap>
    {/* {
        data.map((a,i)=>{
            return <Component post={a} key={i}></Component>
        })
    } */}
    
    </M.ComponentWrap>
    
    </M.MainWrap>
    </>

  );
}
export default Main;