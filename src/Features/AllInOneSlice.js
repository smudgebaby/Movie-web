import { createSlice } from "@reduxjs/toolkit";

export const AllInOneSlice = createSlice({
  name: "movieList",
  initialState: {
    liked: [],
    blocked: [],
    movieInfo: []
  },
  reducers: {
    like: (state, action) => {
      state.liked = [...state.liked, action.payload];
    },
    block: (state, action) => {
      state.blocked = [...state.blocked, action.payload];
    },
    unlike: (state, action) => {
      state.liked = state.liked.filter((s) => s !== action.payload);
    },
    unblock: (state, action) => {
      state.blocked = state.blocked.filter((s) => s !== action.payload);
    },
    likedToBlocked: (state, action) => {
      state.liked = state.liked.filter((s) => s !== action.payload);
      state.blocked = [...state.blocked, action.payload];
    },
    blockedToLiked: (state, action) => {
      state.blocked = state.blocked.filter((s) => s !== action.payload);
      state.liked = [...state.liked, action.payload];
    },
    update: (state, action) => {
      state.movieInfo = [...state.movieInfo, ...action.payload];
    },

    default: (state) => state
  }
});

export const {
  like,
  block,
  unlike,
  unblock,
  likedToBlocked,
  blockedToLiked,
  update
} = AllInOneSlice.actions;
export default AllInOneSlice.reducer;
