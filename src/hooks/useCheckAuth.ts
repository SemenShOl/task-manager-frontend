import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const useCheckAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  });
};
