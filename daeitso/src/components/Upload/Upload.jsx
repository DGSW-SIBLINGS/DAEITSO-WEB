import React from "react";
import { useRecoilState } from "recoil";
import { LOCATION } from "../../constants/locationlist/LOCATION";
import { postUploadlocationAtom } from "../../recoil/uploadAtom";
import UploadBt from "../Button/UploadupBt/UploadupBt";
import * as U from "./upload.style";
import { useState } from "react";

export default function Upload() {
  const [tag, setTag] = useRecoilState(postUploadlocationAtom);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(true);
  };

  const togglePopupinner = () => {
    setShowPopup(false);
  };
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
            <button>나눔</button> 1
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
            <b>거래 위치</b>
            <button className="open" onClick={togglePopup} value="false">
              +
            </button>

            {showPopup
              ? LOCATION.map((item) => (
                  <button onClick={() => setTag(item.name)}>{item.name}</button>
                ))
              : null}
            <button className="close" onClick={togglePopupinner}>
              x
            </button>
          </U.UploadTag>
          <U.UploadLo>
            <b>상품 태그</b>
            <select>
              <option>도서</option>
              <option>옷</option>
              <option>전자기기</option>
              <option>음식</option>
              <option>재능기부</option>
              <option>기타중고물품</option>
            </select>
          </U.UploadLo>
        </U.UploadBottom>
      </U.UploadList>
    </U.UploadBox>
  );
}
