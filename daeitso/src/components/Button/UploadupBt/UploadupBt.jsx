import React from "react";
import * as B from "./uploadupBt.style";
export default function UploadBt() {
  return (
    <B.UploadBtBox>
      <B.UploadBtD>
        <button>취소</button>
      </B.UploadBtD>
      <B.UploadBtU>
        <button>상품등록</button>
      </B.UploadBtU>
    </B.UploadBtBox>
  );
}
