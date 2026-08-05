import { createSelector } from "@reduxjs/toolkit";

const selectPosts = (state) => state.posts.posts;

export const selectPublishedPosts = createSelector(
  [selectPosts],
  (posts) =>
    posts.filter(
      (post) => post.status === "Published"
    )
);

export const selectDraftPosts = createSelector(
  [selectPosts],
  (posts) =>
    posts.filter(
      (post) => post.status === "Draft"
    )
);

export const selectTwitterPosts = createSelector(
  [selectPosts],
  (posts) =>
    posts.filter(
      (post) => post.platform === "Twitter"
    )
);

export const selectInstagramPosts = createSelector(
  [selectPosts],
  (posts) =>
    posts.filter(
      (post) => post.platform === "Instagram"
    )
);

export const totalPosts = createSelector(
  [selectPosts],
  (posts) => posts.length
);