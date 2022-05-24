import { useEffect, useMemo, useState } from "react";
import PostService from "./API/PostService";
import { useFetching } from "./components/hooks/useFetching";
import { usePosts } from "./components/hooks/usePost";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Loader from "./Loader/Loader";
import "./styles/App.css";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import { getPageCount, getPagesArray } from "./utils/pages";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);
  let pagesArray = getPagesArray(totalPages);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // ПОЛУЧАЕМ POST ИЗ ДОЧЕРНЕГО КОМПОНЕНТА
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const changePage = (page) => {
    setPage(page)
  
  }

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
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPost}
          title="Посты про JavaScript"
        />
      )}
      <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span
          onClick={() => changePage(p)}
           key={p} className={page === p ? "page page__current" : "page"}>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
