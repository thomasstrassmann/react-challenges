import React, { useState, useEffect } from "react";
import { savedPosts } from "../posts.json";
import css from "./css/Content.module.css";
import Loader from "./Loader";
import PostItem from "./PostItem";


function ContentHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      setPosts(savedPosts);
    }, 2000);
  }, []);

 const handleChange = (event) => {
    let name = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(name);
    });
    setPosts(filteredPosts);
  };

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
          <label htmlFor="searchInput">Search:</label>
          <input
            type="text"
            id="searchInput"
            name="input"
            placeholder="By Author..."
            onChange={(event) => handleChange(event)}
          ></input>
          <h4>posts found: {posts.length}</h4>
        </form>
      </div>

      <div className={css.SearchResults}>
        {isLoaded ? <PostItem savedPosts={posts} /> : <Loader />}
      </div>
    </div>
  );
}

export default ContentHooks;
