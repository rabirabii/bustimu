import { backendPort } from "@/utilities/server";
import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const logout = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${backendPort}/user/logout`, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      setIsLoading(false);
      navigate("/sign-in", { replace: true });
      window.location.reload();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "An error occurred during logout.";
      setError(errorMessage);
      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  return { logout, isLoading, error };
};

export default useLogout;
