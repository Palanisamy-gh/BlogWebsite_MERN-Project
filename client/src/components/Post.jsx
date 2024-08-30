/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <div className="card mb-4">
      <div className="row">
        <div className="col-sm-12 col-md-3">
          <img
            className="img-fluid h-100 card-img-top"
            src={post.image}
            alt={post.title}
          />
        </div>
        <div className="card-body col-md-8">
          <h5 className="card-title">{post?.title}</h5>
          <p className="card-text">{post?.content.substr(0, 100)}...</p>
          <button className="btn btn-primary">
            <Link
              to={`/posts/${post._id}`}
              className="text-light text-decoration-none"
            >
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
