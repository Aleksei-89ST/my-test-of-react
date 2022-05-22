import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

function PostForm({create}) {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
        ...post , id: Date.now()
    }
    create(newPost)
    setPost({ title: "", body: "" });
  };
  return (
    <form>
      {/*УПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="название поста"
      />
      {/*НЕУПРАВЛЯЕМЫЙ / НЕКОНТРОЛИРУЕМЫЙ КОМПОНЕНТ */}
      {/* <input ref={bodyInputRef} type="text"/> */}
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="описание поста"
      />
      <MyButton onClick={addNewPost}> Создать пост</MyButton>
    </form>
  );
}

export default PostForm;
