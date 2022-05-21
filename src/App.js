import { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButton from "./UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1., title: "Java Script", body: "Description" },
    { id: 2, title: "Java Script 2", body: "Description" },
    { id: 3, title: "Java Script 3", body: "Description" },
  ]);
  return (
    <div className="App">
      <form>
        <input type='text' placeholder="название поста"/>
        <input type='text' placeholder="описание поста"/>
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Посты про JS' />
    </div>
  );
}

export default App;
