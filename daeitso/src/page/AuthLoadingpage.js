import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QueryString from "query-string";
import axios from "axios";
import { ACCESS_KEY, REFRESH_KEY } from "../constants/auth/auth.constants";
import CONFIG from "../config.json";

const AuthLoadingpage = () => {
  const { search } = useLocation();
  const query = QueryString.parse(search);
  const navigate = useNavigate();

  const request = async (code) => {
    try {
      const { data } = await axios.post(`${CONFIG.server}/auth/code`, {
        code,
      });
      localStorage.setItem(ACCESS_KEY, data.data.accessToken);
      localStorage.setItem(REFRESH_KEY, data.data.refreshToken);
      navigate();
    } catch (error) {}
  };
};
