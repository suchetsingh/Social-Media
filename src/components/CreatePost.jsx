import React, { useContext, useRef } from "react";
import { PostList } from "../store/posts-list-store";

export default function CreatePost() {
  const {addPost}=useContext(PostList);


  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId= userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody= postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");

    userIdElement.current.value=" ";
    postTitleElement.current.value=" ";
    postBodyElement.current.value=" ";
    reactionsElement.current.value=" ";
    tagsElement.current.value=" ";


    addPost(userId,postTitle,postBody,reactions,tags);
  }

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your used id here
          </label>
          <input
            type="text"
            className="form-control"
            ref={userIdElement}
            id="userId"
            placeholder="Your user id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            ref={postTitleElement}
            id="title"
            placeholder="How are you feeling today"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea rows={4}
            type="text"
            className="form-control"
            ref={postBodyElement}
            id="content"
            placeholder="Tell us more about it"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            ref={reactionsElement}
            id="reactions"
            placeholder="How many people reacted to this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your Hashtags here
          </label>
          <input
            type="text"
            className="form-control"
            ref={tagsElement}
            id="tags"
            placeholder="Please enter tags using space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}
