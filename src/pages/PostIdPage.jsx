import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import useFetching from "../components/hooks/useFetching";
import Loader from "../Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  //Для отправки запросов -> хук возвращает массив где первый элемент это некотороя функция,второй элемент это индикатор загрузки , третий error
  //Параметром этот хук принимает callback который будет возвращен ввиде обёртки первым элементом этого массива
  
  // эта функция для получения постов
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  // эта функция для получения комментариев 
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });
  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: 15 }}>
              <h5>
                {comm.email}
                <div>{comm.body}</div>
              </h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
