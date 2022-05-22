import { useRef, useState } from "react";
import PostForm from "./components/PostForm";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
// import MyButton from "./UI/button/MyButton";
// import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Java Script", body: "Description" },
    { id: 2, title: "Java Script 2", body: "Description" },
    { id: 3, title: "Java Script 3", body: "Description" },
  ]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  //с помощью этого хука я получу доступ к дом элементу и уже этого дом элемента заберу value
  // const bodyInputRef = useRef(); // также с помощью useRef я создал ссылку - у этой ссылки есть единственное поле CURRENT - ЭТО И ЕСТЬ ДОМ ЭЛЕМЕНТ -у которо есть поле VALUE  и это value я смогу получить

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
