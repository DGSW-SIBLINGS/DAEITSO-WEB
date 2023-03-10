import styled from "styled-components";

export const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1155px;
  height: 50px;
  color: #9e9e9e;
  font-size: 1em;
  font-family: pretendard;
`;
export const PostImgWrap = styled.div`
  width: 1155px;
  height: 500px;
  display: flex;
  flex-direction: row;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  padding: 50px 50px 30px 50px;
`;
export const Title = styled.div`
  font-size: 2em;
  font-family: Pretendard;
  font-weight: 600;
  margin: 0px 0px 30px 0px;
`;

export const PriceWrap = styled.div`
  width: 600px;
  border-bottom: 1.5px solid #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  box-sizing: border-box;
`;
export const Price = styled.div`
  font-size: 2em;
  font-family: Pretendard;
  font-weight: 600;
`;
export const Tag = styled.div`
  width: 70px;
  height: 30px;
  background-color: #5e78ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-right: 5px;
  color: white;
  font-family: Pretendard;
  border-radius: 5px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-top: -50px; */
`;

export const Subinfo = styled.div`
  display: flex;
  flex-direction: row;
  color: #9e9e9e;
  font-family: Pretendard;
  align-items: center;
  margin: 5px;
`;
export const Button = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: pretendard;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  margin: 10px;
`;
export const Memo = styled.div`
  color: black;
  font-family: pretendard;
  font-weight: 400;
  font-size: 1.4rem;
  margin-top: 20px;
  padding-bottom: 10px;
  box-sizing: border-box;
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-top: -50px; */
`;
export const line = styled.div`
  /* border-bottom: 1px solid black; */
  /* margin-top: -10px; */
  width: 1155px;
`;
export const InfoWrap2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1155px;
  height: 50px;
  color: #9e9e9e;
  font-size: 0.8em;
  font-family: pretendard;
  margin-top: 7px;
`;
export const MemoContent = styled.div`
  /* border-bottom: 1px solid black; */
  width: 1155px;
  height: 100px;
`;

export const Banner = styled.img`
  width: 1155px;
  height: 300px;
  margin-top: -100px;
`;

export const MemoContent2 = styled.div`
  width: 1155px;
  height: 400px;
  background-color: #f2f3fd;
`;

export const Message_White = styled.div`
  background-color: white;
  border-radius: 5px;
  color: black;
  font-family: pretendard;
  font-weight: 500;
  width: ${(props) => props.width};
  padding: 10px;
  margin: 10px;
`;

export const Message_Blue = styled.div`
  background-color: white;
  border-radius: 5px;
  color: #5e78ff;
  font-family: pretendard;
  font-weight: 500;
  width: ${(props) => props.width};
  padding: 10px;
  margin: 10px;
`;
export const Comment = styled.div`
  background-color: #f2f2f2;
  width: 1155px;
  height: 130px;
`;
export const CommentInput = styled.textarea`
  width: 1130px;
  height: 50px;
  border: none;
  background-color: #f2f2f2;
  font-family: pretendard;
  padding: 10px;
`;
export const SendButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #707dff;
  color: white;
  border: none;
  &:active {
    background-color: #707dcc;
    transition: 0.5s;
  }
`;

export const Content = styled.div``;
