import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    createUsers: [],
  },
  reducers: {
    createUsers: (state, action) => {
      state.createUsers.push(action.payload);
    },
  },
});

export const { createUsers } = usersSlice.actions;

export default usersSlice.reducer;
