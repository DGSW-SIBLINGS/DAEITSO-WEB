import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { LOCATION } from "../../constants/locationlist/LOCATION";
import {
  postUploadfreeAtom,
  postUploadinfoAtom,
  postUploadlocationAtom,
  postUploadnameAtom,
  postUploadpriceAtom,
  postUploadtagAtom,
} from "../../recoil/uploadAtom";
import * as U from "./upload.style";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { TAGLIST } from "../../constants/taglist/TAGLIST";

export default function Upload() {
  const [locatag, setLocatag] = useRecoilState(postUploadlocationAtom);
  const [tag, setTag] = useRecoilState(postUploadtagAtom);
  const [name, setName] = useRecoilState(postUploadnameAtom);
  const [prices, setPrice] = useRecoilState(postUploadpriceAtom);
  const [free, setFree] = useRecoilState(postUploadfreeAtom);
  const [info, setInfo] = useRecoilState(postUploadinfoAtom);

  const [showPopup, setShowPopup] = useState(false);
  const [tagPopup, setTagPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(true);
  };

  const tagopen = () => {
    setTagPopup(true);
  };

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const onIncrease = () => {
    setPrice((prevCount) => prevCount + 1000);
    console.log(prices);
  };

  const onPrice = () => {
    setFree(0);
    console.log(free);
  };

  const handleInfo = (e) => {
    setInfo(e.target.value);
    console.log(info);
  };

  useEffect(() => {
    console.log("locatag", locatag);
    console.log("tag", tag);
    console.log("name", name);
    console.log("prices", prices);
    console.log("free", free);
    console.log("info", info);
  }, [locatag, tag]);
  // const
  return (
    <U.UploadBox>
      <U.UploadList>
        <U.UploadTop>
          <U.UploadName>
            <b>상품 이름</b>
            <input value={name} onChange={(e) => handleName(e)}></input>
          </U.UploadName>
          <U.UploadPriceBox>
            <b>상품 가격</b>
            <U.UploadPrice>
              <div className="priceBox">
                {prices}
                {free}원<button onClick={onIncrease}>+</button>
              </div>
            </U.UploadPrice>
          </U.UploadPriceBox>
          <U.UploadPriceBt>
            <button onClick={onPrice}>나눔</button>
          </U.UploadPriceBt>
        </U.UploadTop>
        <U.Uploadmiddle>
          <U.UploadInfo>
            <b>상품 설명</b>
            <textarea value={info} onChange={(e) => handleInfo(e)}></textarea>
          </U.UploadInfo>
        </U.Uploadmiddle>
        <U.UploadBottom>
          <U.UploadTag>
            <b>거래 위치</b>
            <button className="open" onClick={togglePopup} value="false">
              <AiFillCaretDown />
            </button>

            {showPopup
              ? LOCATION.map((item) => (
                  <button
                    className="lacatagbt"
                    onClick={() => setLocatag(item.payload)}
                  >
                    {item.name}
                  </button>
                ))
              : null}
          </U.UploadTag>
          <U.UploadLo>
            <b>상품 태그</b>
            <button className="opentag" onClick={tagopen} value="false">
              <AiFillCaretDown />
            </button>

            {tagPopup
              ? TAGLIST.map((item) => (
                  <button className="t" onClick={() => setTag(item.payload)}>
                    {item.name}
                  </button>
                ))
              : null}
          </U.UploadLo>
        </U.UploadBottom>
      </U.UploadList>
    </U.UploadBox>
  );
}
