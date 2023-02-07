import React, { useRef } from "react";
import { AiFillCamera } from "react-icons/ai";

import * as F from "./file.style";
import { postFileUrlAtom } from "../../recoil/uploadAtom";
import { useRecoilState } from "recoil";
import { useFile } from "../../hooks/useFile";

export default function File() {
  const { uploadImg } = useFile();

  const imgRef = useRef();
  const onClickImg = () => {
    imgRef.current.click();
  };

  return (
    <F.FileBox>
      <F.FileList>
        <F.FileH1>
          <h2>상품등록</h2>
        </F.FileH1>
        <F.FileInputBox>
          <h3>상품이미지</h3>
          <F.FileLi>
            <li>상품이미지의 사이즈는 640*640입니다</li>
            <li>이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다</li>
          </F.FileLi>
          <input
            multiple="multiple"
            type="file"
            onChange={uploadImg}
            ref={imgRef}
            style={{ display: "none" }}
          ></input>
          <F.FileImgBt>
            <button onClick={onClickImg}>
              <AiFillCamera className="Camera-icon" />
              이미지를 업로드해주세요
            </button>
          </F.FileImgBt>
        </F.FileInputBox>
      </F.FileList>
    </F.FileBox>
  );
}
