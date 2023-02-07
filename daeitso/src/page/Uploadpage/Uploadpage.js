import React from "react";
import UploadBt from "../../components/Button/UploadupBt/UploadupBt";
import File from "../../components/File/File";
import Header from "../../components/Header/Header";
import Upload from "../../components/Upload/Upload";

export default function Uploadpage() {
  return (
    <div>
      <Header />
      <File />
      <Upload />
      <UploadBt />
    </div>
  );
}
