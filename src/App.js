import { useState } from "react";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1., title: "Java Script", body: "Description" },
    { id: 2, title: "Java Script 2", body: "Description" },
    { id: 3, title: "Java Script 3", body: "Description" },
  ]);
  return (
    <div className="App">
      <form>
        <MyInput type='text' placeholder="название поста"/>
        <MyInput type='text' placeholder="описание поста"/>
        <MyButton disabled > Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Посты про JS' />
    </div>
  );
}

export default App;
