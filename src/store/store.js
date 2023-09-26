import { configureStore } from "@reduxjs/toolkit";
import AllInOneReducer from "../Features/AllInOneSlice";

export default configureStore({
  reducer: { movieList: AllInOneReducer }
});
