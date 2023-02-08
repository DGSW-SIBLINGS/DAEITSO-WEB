import React from "react";
import Header from "../../components/Header/Header";
import * as M from "./Mypage.style";
import { useMyfile } from "../../hooks/useMyfile";
import { useState } from "react";
import plus from "../../assets/img/plus.svg";
import tag from "../../assets/img/tag.svg";
import update from "../../assets/img/updatebtn.svg";
import Component from "../Main/Main_Component";
function Mypage() {
  const { handleChangeFile } = useMyfile();
  const [data, setData] = useState([
    {
      title: "대소고 후리스 나눔합니다",
      imgUrls:
        "https://mentomen.s3.ap-northeast-2.amazonaws.com/9e91067b-40dd-484f-a4ee-b0f06cce3afa.png",
      category: "옷",
      content:
        "해커톤 옷으로 받았는데 사이즈를 잘못시켜 못입게되어 나눔합니다 ",
      price: 0,
      freeShare: "FREE",
      place: "재덕정",
    },
    {
      title: "혼공자 책 판매합니다",
      imgUrls: [
        {
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKhqpzZUj7Gjc0AmulXvFbmbBj0fu6YxbqQ&usqp=CAU",
        },
      ],
      category: "도서",
      content: "집에 혼공자 책이 하나 더 있어서 판매합니다 새책 입니당",
      price: 3000,
      freeShare: "SALE",
      place: "도서관",
    },
    {
      title: "에어팟프로 판매합니다",
      imgUrls: [
        {
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKhqpzZUj7Gjc0AmulXvFbmbBj0fu6YxbqQ&usqp=CAU",
        },
      ],
      category: "전자기기",
      content:
        "토스 이벤트로 당첨된 에어팟프로입니다 약 1년정도 사용했고 생활기스 조금 있습니다",
      price: 5000,
      freeShare: "SALE",
      place: "야외음악당",
    },
    {
      title: "포켓몬빵 나눔합니다",
      imgUrls: [
        {
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKhqpzZUj7Gjc0AmulXvFbmbBj0fu6YxbqQ&usqp=CAU",
        },
      ],
      category: "음식",
      content:
        "홈푸드 마트에 갔는데 포켓몬빵이 많이 있어서 많이샀습니다 나눔하고싶어용",
      price: 0,
      freeShare: "FREE",
      place: "운동장",
    },
    {
      title: "해커톤중인데 서버통신이 어려워요 선배님들 도와주세요",
      imgUrls: [
        {
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKhqpzZUj7Gjc0AmulXvFbmbBj0fu6YxbqQ&usqp=CAU",
        },
      ],
      category: "post요청 ",
      content: "아",
      price: 3600,
      freeShare: "SALE",
      place: "PLAYGROUND",
    },
    {
      title: "에어팟 1세대 삽니다",
      imgUrls: [
        {
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKhqpzZUj7Gjc0AmulXvFbmbBj0fu6YxbqQ&usqp=CAU",
        },
      ],
      category: "전자기기",
      content: "아 집가고 싶다",
      price: 5000,
      freeShare: "SALE",
      place: "PLAYGROUND",
    },
  ]);
  return (
    <>
      <Header />
      <M.MypageWrap>
        <M.Row>
          <div className="filebox">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleChangeFile}
            />
            <M.Imginput>
              <img src={plus} style={{ width: 50 }} />
            </M.Imginput>
            <img src={update} style={{ marginTop: -50, marginLeft: 60 }} />
          </div>
          <M.Column>
            <M.Name>전해림</M.Name>
            <M.Email>HAERIM0@dgsw.hs.kr</M.Email>
            <M.NumberWrap>
              <img src={tag} style={{ width: 20 }} />
              <M.Number>1학년 1반 3번</M.Number>
            </M.NumberWrap>
          </M.Column>
        </M.Row>
        <M.Subtitle>내가 등록한 상품</M.Subtitle>
        <M.ComponentWrap>
          {data.map((a, i) => {
            return <Component post={a} key={i}></Component>;
          })}
        </M.ComponentWrap>
        <M.Subtitle>나의 관심 상품</M.Subtitle>
        <M.ComponentWrap>
          {data.map((a, i) => {
            return <Component post={a} key={i}></Component>;
          })}
        </M.ComponentWrap>
      </M.MypageWrap>
    </>
  );
}

export default Mypage;
