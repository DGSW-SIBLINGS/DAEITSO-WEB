import React, { useEffect, useState } from "react";
import * as P from "./Post.style";
import like from "../../assets/img/like.svg";
import clock from "../../assets/img/clock.svg";
import banner from "../../assets/img/fixedbanner.svg";
import { useLocation, useParams } from "react-router-dom";
import { customAxios } from "../../lib/axios/customAxios";
import { postIdAtom } from "../../recoil/getAtom";
import { useRecoilState } from "recoil";
import { LOCATION } from "../../constants/locationlist/LOCATION";
import Comment from "./Post_comment";
import { TAGLIST } from "../../constants/taglist/TAGLIST";
function Post() {
  const [post, setPost] = useState();

  const [comment, setComment] = useState("");
  const handleComment = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };

  useEffect(() => {
    request();
  }, []);

  const location = useLocation();
  const onComment = async ({}) => {
    try {
      const data = {
        postId: location.state,
        content: comment,
      };
      console.log(data);
      const res = await customAxios.post(`/comment`, data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const request = async () => {
    try {
      const { data } = await customAxios.get(`post/${location.state}`);
      setPost(data.data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  function getPlaceWithKorean() {
    return LOCATION.find((e) => e.payload === post.place).name;
  }

  function getCategory() {
    return TAGLIST.find((e) => e.payload === post.category).name;
  }

  return (
    post && (
      <P.PostWrap>
        <P.InfoWrap>
          카테고리 : 전자기기 | 나눔여부
          <input type={"checkbox"} style={{ marginLeft: 5 }}></input>
        </P.InfoWrap>
        <P.PostImgWrap>
          <img
            src={post.imgUrls && post.imgUrls[0]}
            alt="none"
            style={{ width: 500, height: 500 }}
          ></img>
          <P.Right>
            <P.Title>{post.title}</P.Title>
            <P.PriceWrap>
              <P.Price>
                {(post.freeShare === "SALE" && post.price) ||
                  (post.freeShare === "FREE" && "무료나눔")}
              </P.Price>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <P.Tag>나눔</P.Tag>
                <P.Tag>페이</P.Tag>
              </div>
            </P.PriceWrap>
            <P.Row>
              <P.Subinfo>
                <img src={like}></img>
                151
              </P.Subinfo>
              <P.Subinfo>
                <img src={clock}></img>
                2:51
              </P.Subinfo>
              <P.Subinfo>거래 위치: {getPlaceWithKorean()}</P.Subinfo>
            </P.Row>
            <div style={{ marginTop: 200 }}></div>
            <P.Row>
              <div style={{ marginLeft: 50 }}></div>
              <P.Button color={"#FC8080"}>좋아요</P.Button>
              <P.Button color={"#FFD233"}>거래하기</P.Button>
              <P.Button color={"#5E78FF"}>나눔톡하기</P.Button>
            </P.Row>
          </P.Right>
        </P.PostImgWrap>
        <P.line>
          <P.Row>
            <P.Memo>상품설명</P.Memo>
            <P.InfoWrap2>
              거래위치 : {getPlaceWithKorean()} | 카테고리 :{getCategory()}
            </P.InfoWrap2>
          </P.Row>

          <P.Content>
            <p>{post.content}</p>
          </P.Content>
        </P.line>

        <P.MemoContent></P.MemoContent>
        <P.Banner src={banner}></P.Banner>
        <P.line>
          <P.Row>
            <P.Memo>상품문의</P.Memo>
          </P.Row>
          <P.Comment>
            <P.CommentInput
              value={comment}
              onChange={(e) => handleComment(e)}
            ></P.CommentInput>
            <P.SendButton onClick={onComment}>문의하기</P.SendButton>
          </P.Comment>
        </P.line>
        <P.MemoContent2>
          <Comment></Comment>
        </P.MemoContent2>
      </P.PostWrap>
    )
  );
}

export default Post;
