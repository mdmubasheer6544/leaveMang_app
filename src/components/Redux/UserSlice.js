import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const UserSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = UserSlice.actions;
export default UserSlice.reducer;
