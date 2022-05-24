import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { usePosts } from "./components/hooks/usePost";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPost = usePosts(posts,filter.sort,filter.query)
useEffect(() => {
fetchPosts()
}, [filter])
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
async function fetchPosts () {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  setPosts(response.data)
}

  // ПОЛУЧАЕМ POST ИЗ ДОЧЕРНЕГО КОМПОНЕНТА
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  //с помощью этого хука я получу доступ к дом элементу и уже у этого дом элемента заберу value
  // const bodyInputRef = useRef(); // также с помощью useRef я создал ссылку - у этой ссылки есть единственное поле CURRENT - ЭТО И ЕСТЬ ДОМ ЭЛЕМЕНТ(в нашем случае) -у которо есть поле VALUE  и это value я смогу получить

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPost}
        title="Посты про JS"
      />
    </div>
  );
}

export default App;
