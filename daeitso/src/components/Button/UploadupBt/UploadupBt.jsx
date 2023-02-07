import React from "react";
import * as B from "./uploadupBt.style";
import { customAxios } from "../../../lib/axios/customAxios";
import {
  postUploadfreeAtom,
  postUploadinfoAtom,
  postUploadlocationAtom,
  postUploadnameAtom,
  postUploadpriceAtom,
  postUploadtagAtom,
  postFileUrlAtom,
} from "../../../recoil/uploadAtom";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
export default function UploadBt() {
  const navigate = useNavigate();
  const [locatag, setLocatag] = useRecoilState(postUploadlocationAtom);
  const [tag, setTag] = useRecoilState(postUploadtagAtom);
  const [name, setName] = useRecoilState(postUploadnameAtom);
  const [prices, setPrice] = useRecoilState(postUploadpriceAtom);
  const [free, setFree] = useRecoilState(postUploadfreeAtom);
  const [info, setInfo] = useRecoilState(postUploadinfoAtom);
  const [fileUrl, setFileUrl] = useRecoilState(postFileUrlAtom);

  const upload = async ({}) => {
    try {
      const data = {
        imgUrls: fileUrl,
        category: tag,
        title: name,
        content: info,
        price: prices,
        freeShare: free,
        place: locatag,
      };

      const res = await customAxios.post("/post", data);
      navigate("/main");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <B.UploadBtBox>
      <B.UploadBtD>
        <button>취소</button>
      </B.UploadBtD>
      <B.UploadBtU>
        <button onClick={upload}>상품등록</button>
      </B.UploadBtU>
    </B.UploadBtBox>
  );
}
