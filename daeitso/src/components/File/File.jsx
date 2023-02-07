import React from "react";

import * as F from "./file.style";

export default function File() {
  return (
    <F.FileBox>
      <F.FileList>
        <F.FileH1>
          <h2>상품등록</h2>
        </F.FileH1>
        <F.FileInputBox>
          <h3>상품이미지</h3>
          <li></li>
          <li></li>
          <input></input>
        </F.FileInputBox>
      </F.FileList>
    </F.FileBox>
  );
}
