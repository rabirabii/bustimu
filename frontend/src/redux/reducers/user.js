import { createReducer } from "@reduxjs/toolkit";
import { loadUser } from "../actions/user";

const initialState = {
  isAuth: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(loadUser.fulfilled, (state, action) => {
      state.isAuth = true;
      state.loading = false;

      state.user = action.payload;
    })
    .addCase(loadUser.rejected, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuth = false;
    });
});
