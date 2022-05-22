import { useRef, useState } from "react";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Java Script", body: "Description" },
    { id: 2, title: "Java Script 2", body: "Description" },
    { id: 3, title: "Java Script 3", body: "Description" },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //с помощью этого хука я получу доступ к дом элементу и уже этого дом элемента заберу value
  // const bodyInputRef = useRef(); // также с помощью useRef я создал ссылку - у этой ссылки есть единственное поле CURRENT - ЭТО И ЕСТЬ ДОМ ЭЛЕМЕНТ -у которо есть поле VALUE  и это value я смогу получить
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
  setPosts([...posts,newPost])
  setTitle('')
  setBody('')
  };
  return (
    <div className="App">
      <form>
        {/*УПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="название поста"
        />
        {/*НЕУПРАВЛЯЕМЫЙ / НЕКОНТРОЛИРУЕМЫЙ КОМПОНЕНТ */}
        {/* <input ref={bodyInputRef} type="text"/> */}
        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="описание поста"
        />
        <MyButton onClick={addNewPost}> Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
