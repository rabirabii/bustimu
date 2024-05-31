import { backendPort } from "@/utilities/server";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Load user
export const loadUser = createAsyncThunk("user/loadUser", async () => {
  const { data } = await axios.get(`${backendPort}/user/loadUser`, {
    withCredentials: true,
  });
  return data.user;
});
