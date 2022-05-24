import { useMemo } from "react";

//кастомные пользовательские хуки - это хуки которые внутри себя используют стандартные реакт хуки такие как useState,useMemo и т.д
export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};
// этот хук будет возвращать отсортированный и отфильтрованный массив
export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(query)
    );
  }, [query, sortedPosts]);
  return sortedAndSearchedPost;
};
