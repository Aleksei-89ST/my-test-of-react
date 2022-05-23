import { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
// import MyButton from "./UI/button/MyButton";
// import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aaaaaaaaa", body: "rrrrr" },
    { id: 2, title: "bbbbbbbbb 2", body: "tttttt" },
    { id: 3, title: "vvvvvvvvv 3", body: "iiiiiiiiiiii" },
  ]);
  const [filter,setFilter] = useState({sort:'', query:''})
  // реализую двухстороннее связывание
  // const [selectedSort, setSelectedSort] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("ФУНКЦИЯ ОТРАБОТАЛА СОРТЕД ПОСТС");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);
  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);
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

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter 
      filter={filter}
      setFilter={setFilter}
      
      />
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPost}
          title="Посты про JS"
        />
    </div>
  );
}

export default App;
