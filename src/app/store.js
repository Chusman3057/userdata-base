import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/usersData/UserSlice";

const store = configureStore({
  reducer: {
    createUsers: userReducer,
  },
});

export default store;
