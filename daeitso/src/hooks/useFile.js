import React from "react";
import { customAxios } from "../lib/axios/customAxios";
import { postFileUrlAtom } from "../recoil/uploadAtom";
import { useRecoilState } from "recoil";

export const useFile = () => {
  const [fileUrl, setFileUrl] = useRecoilState(postFileUrlAtom);
  const uploadImg = async (e) => {
    const files = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    try {
      const { data } = await customAxios.post("/file", formData);
      const arr = [];

      data.data.forEach((value) => {
        arr.push(value);
      });
      setFileUrl(arr);
    } catch (err) {
      console.log(err);
    }
  };
  return { uploadImg };
};
