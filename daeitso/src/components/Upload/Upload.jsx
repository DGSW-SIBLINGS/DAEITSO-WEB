import React from "react";
import UploadBt from "../Button/UploadupBt/UploadupBt";
import * as U from "./upload.style";

export default function Upload() {
  return (
    <U.UploadBox>
      <U.UploadList>
        <U.UploadTop>
          <U.UploadName>
            <b>상품 이름</b>
            <input></input>
          </U.UploadName>
          <U.UploadPrice>
            <b>상품 가격</b>
            <input></input>
          </U.UploadPrice>
          <U.UploadPriceBt>
            <button>무료나눔</button>
          </U.UploadPriceBt>
        </U.UploadTop>
        <U.Uploadmiddle>
          <U.UploadInfo>
            <b>상품 설명</b>
            <textarea></textarea>
          </U.UploadInfo>
        </U.Uploadmiddle>
        <U.UploadBottom>
          <U.UploadTag>
            <b>상품 태그</b>
            <select>
              <option>운동장 - PLAYGROUND</option>
              <option>강당 - AUDITORIUM</option>
              <option>재덕정 - JAEDUCK</option>
              <option>도서관 - LIBRARY</option>
              <option>야외음악당 - OUTDOOR CONCERT HALL</option>
            </select>
          </U.UploadTag>
          <U.UploadLo>
            <b>거래 위치</b>
            <select>
              <option>도서 - BOOK</option>
              <option>옷 - CLOTHES</option>
              <option>전자기기 - ELECTRONICS</option>
              <option>음식 - FOOD</option>
              <option>재능기부 - TALENT</option>
              <option>기타중고물품 - ETC</option>
            </select>
          </U.UploadLo>
        </U.UploadBottom>
      </U.UploadList>
    </U.UploadBox>
  );
}
