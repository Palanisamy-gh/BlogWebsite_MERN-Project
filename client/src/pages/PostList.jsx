import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Post from "../components/Post";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:5000/posts");
    setPosts(response.data);
  };

  const fetchCategory = async () => {
    const response = axios.get("http://localhost:5000/category");
    setCategory((await response).data);
  };

  useEffect(() => {
    fetchPosts();
    fetchCategory();
  }, []);

  return (
    <div>
      <main>
        <div className="container mt-4">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8 mt-4">
              <h1 className="mb-4">Latest Posts</h1>
              {posts.length > 0 ? (
                posts.map((post) => <Post key={post.id} post={post} />)
              ) : (
                <div>No posts to show</div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 mt-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Categories</h5>
                  <ul className="list-group">
                    {category.map((item) => (
                      <li key={item.id} className="list-group-item">
                        <Link
                          to={`/posts/category/${item._id}`}
                          href="#"
                          className="text-black"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PostList;
