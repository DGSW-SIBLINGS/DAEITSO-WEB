import React from "react";
import config from "../../../config.json";
import { ACCESS_KEY } from "../../../constants/auth/auth.constants";
import { navigate, useNavigate } from "react-router-dom";

function AuthBt({ label, disabled }) {
  const navigate = useNavigate();
  let authUrl = `http://dauth.b1nd.com/login?client_id=${config.CLIENTID}&redirect_uri=http://localhost:3000/callback`;

  return (
    <button
      onClick={() => {
        return !localStorage.getItem(ACCESS_KEY)
          ? (window.location = authUrl)
          : navigate("/main");
      }}
      disabled={disabled}
    >
      DAuth 로그인
    </button>
  );
}

export default AuthBt;
