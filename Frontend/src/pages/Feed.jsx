import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "6abfc741cbb271f76dc608ec",
      image: "https://ik.imagekit.io/ue4epngea/image_Polt-RJh1.jpg",
      caption: "this is file text",
      __v: 0,
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then((res) => {
      setPosts(res.data.posts)
    });
  }, []);
  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No posts availabe</h1>
      )}
    </section>
  );
};

export default Feed;
