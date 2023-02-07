import React from "react";
import * as P from "./Post.style";
import like from '../../assets/img/like.svg';
import clock from '../../assets/img/clock.svg';
import banner from '../../assets/img/fixedbanner.svg';
function Post(){
    return(
        <>
        <P.PostWrap>
            <P.InfoWrap>
                카테고리 : 전자기기  |  나눔여부
                <input type={"checkbox"} style={{marginLeft:5}}></input>
                </P.InfoWrap>
                <P.PostImgWrap>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKhqpzZUj7Gjc0AmulXvFbmbBj0fu6YxbqQ&usqp=CAU'} alt='none' style={{width:500,height:500}}></img>
                    <P.Right>
                        <P.Title>키보드 반쪽 나눔해요</P.Title>
                        <P.PriceWrap>
                            <P.Price>무료나눔</P.Price>
                            <div style={{display:'flex', flexDirection:"row"}}>
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
                        <P.Subinfo>
                            거래 위치: 운동장
                        </P.Subinfo>
                        </P.Row>
                        <div style={{marginTop:200}}></div>
                        <P.Row>
                        <div style={{marginLeft:50}}></div>
                            <P.Button color={'#FC8080'}>좋아요</P.Button>
                            <P.Button color={'#FFD233'}>거래하기</P.Button>
                            <P.Button color={'#5E78FF'}>나눔톡하기</P.Button>
                            
                        </P.Row>
                 </P.Right>
                </P.PostImgWrap>
                <P.line>
                    <P.Row>
                    <P.Memo>상품설명</P.Memo>
                <P.InfoWrap2>거래위치 : 운동장 |  카테고리 : 전자기기</P.InfoWrap2>
                    </P.Row>
                </P.line>
                <P.MemoContent></P.MemoContent>
                <P.Banner src={banner}></P.Banner>
                <P.line>
                    <P.Row>
                    <P.Memo>상품문의</P.Memo>
                    </P.Row>
                </P.line>
                <P.MemoContent2>
                    <P.Message_White width={'300px'}>안녕하세요 구매가능한가요?</P.Message_White>
                    <P.Message_Blue width={'250px'}>넵 구매 가능합니다!</P.Message_Blue>
                    <P.Message_White width={'350px'}>오오 그럼 운동장에서 3시에 만날까요?</P.Message_White>
                    <P.Message_Blue width={'100px'}>좋습니다!</P.Message_Blue>
                </P.MemoContent2>
        </P.PostWrap>

        </>
    )
}

export default Post;