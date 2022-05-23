import { useState } from "react";
import PostForm from "./components/PostForm";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import MySelect from "./UI/select/MySelect";
// import MyButton from "./UI/button/MyButton";
// import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aaaaaaaaa", body: "rrrrr" },
    { id: 2, title: "bbbbbbbbb 2", body: "tttttt" },
    { id: 3, title: "vvvvvvvvv 3", body: "iiiiiiiiiiii" },
  ]);
  // реализую двухстороннее связывание
  const [selectedSort,setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // ПОЛУЧАЕМ POST ИЗ ДОЧЕРНЕГО КОМПОНЕНТА
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  //с помощью этого хука я получу доступ к дом элементу и уже у этого дом элемента заберу value
  // const bodyInputRef = useRef(); // также с помощью useRef я создал ссылку - у этой ссылки есть единственное поле CURRENT - ЭТО И ЕСТЬ ДОМ ЭЛЕМЕНТ(в нашем случае) -у которо есть поле VALUE  и это value я смогу получить

const sortPosts = (sort) => {
  setSelectedSort(sort);
  setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
}

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
      <MySelect 
      value={selectedSort}
      onChange={sortPosts}
      defaultValue='Сортировка'
      options={[
        {value:'title', name:'По названию'},
        {value:'body', name: 'По описанию'},
      ]}
      />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
