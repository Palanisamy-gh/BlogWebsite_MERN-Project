import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching post", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (!post) {
    return <p>Loading...</p>;
  }

  const formatedDate = Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(post.postedAt));

  return (
    <main className="container my-4">
      <div className="row">
        <article className="col-lg-8">
          <h2 className="blog-post-title">{post.title}</h2>
          <p className="blog-post-meta">
            {formatedDate} by <a href="#">{post.author}</a>
          </p>

          <img className="mb-3 img-fluid" src={post.image} alt={post.image} />

          <div className="blog-post-content">
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </main>
  );
}

export default PostDetail;
