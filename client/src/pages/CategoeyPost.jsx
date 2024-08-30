import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import { useParams } from "react-router-dom";

function CategoeyPost() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState(null);
  const { id } = useParams();

  const fetchPosts = async () => {
    const response = await axios.get(
      `http://localhost:5000/posts/category/${id}`
    );
    setPosts(response.data);
  };

  const fetchCategories = async () => {
    const response = axios.get(`http://localhost:5000/category/${id}`);
    setCategories((await response).data);
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  if (!categories) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mb-4">{categories.name}</h1>

              {posts.length > 0 ? (
                posts.map((post) => <Post key={post.id} post={post} />)
              ) : (
                <div>No posts to show</div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CategoeyPost;
