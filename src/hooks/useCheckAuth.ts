import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const useCheckAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("is Auth token:", token);
    if (!token) {
      navigate("/login");
    }
  });
};
