import { atom } from "recoil";

export const postFileUrlAtom = atom({
  key: "postFileUrlAtom",
  default: [],
});

export const postUploadnameAtom = atom({
  key: "postUploadnameAtom",
  default: "",
});

export const postUploadpriceAtom = atom({
  key: "postUploadpriceAtom",
  default: 0,
});

export const postUploadfreeAtom = atom({
  key: "postUploadfreeAtom",
  default: "",
});

export const postUploadinfoAtom = atom({
  key: "postUploadinfoAtom",
  default: "",
});

export const postUploadtagAtom = atom({
  key: "postUploadtagAtom",
  default: "",
});

export const postUploadlocationAtom = atom({
  key: "postUploadlocationAtom",
  default: "",
});
