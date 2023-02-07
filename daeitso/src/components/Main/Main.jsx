import React from "react";
import * as M from "./Main.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BannerImg } from "./Main.style";
import { BsFillPatchPlusFill } from "react-icons/bs";
import banner from "../../assets/img/banner1.svg";
import banner2 from "../../assets/img/banner2.svg";
import banner3 from "../../assets/img/banner3.svg";
import minibanner from "../../assets/img/minibanner.svg";
const images = [
  banner,
  banner2,
  banner3,
];

function Main() {
  return (
    <>
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        arrows: true,
        pagination: true,
        interval: 3000,
        speed: 1000,
      }}
    >
      {images.map((img) => {
        return (
          <SplideSlide key={img}>
            <BannerImg style={{ marginBottom: "72px" }}>
              <img src={img} />
            </BannerImg>
          </SplideSlide>
        );
      })}
    </Splide>
    <M.MainWrap>
    <M.Minibanner src={minibanner}></M.Minibanner>
    </M.MainWrap>
    </>

  );
}
export default Main;