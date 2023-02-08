import React, { useRef } from "react";
import { AiFillCamera } from "react-icons/ai";
import { postFileUrlAtom } from "../../recoil/uploadAtom";
import * as F from "./file.style";
// import { useFile } from "../../hooks/useFile";
import { useRecoilState } from "recoil";
import { customAxios } from "../../lib/axios/customAxios";

export default function File({}) {
  //   const { uploadImg } = useFile();
  const [fileUrl, setFileUrl] = useRecoilState(postFileUrlAtom);

  const imgRef = useRef();
  const onClickImg = () => {
    imgRef.current.click();
  };

  const uploadImg = async (e) => {
    const files = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    try {
      const { data } = await customAxios.post("/file", formData);
      const arr = [];
      console.log("ㅎㅇ");
      data.data.forEach((value) => {
        arr.push(value);
      });
      setFileUrl(arr);
    } catch (err) {
      console.log(err);
    }
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
            {fileUrl.map((file) => {
              return <img src={file.imgUrl} alt="" className="img" />;
            })}
          </F.FileImgBt>
        </F.FileInputBox>
      </F.FileList>
    </F.FileBox>
  );
}
