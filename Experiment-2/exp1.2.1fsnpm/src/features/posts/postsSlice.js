import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Learning Redux Toolkit",
      platform: "Twitter",
      status: "Published",
    },
    {
      id: 2,
      title: "React is Awesome",
      platform: "Instagram",
      status: "Draft",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id !== action.payload
      );
    },

    updatePost: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );

      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
  },
});

export const { addPost, deletePost, updatePost } =
  postsSlice.actions;

export default postsSlice.reducer;