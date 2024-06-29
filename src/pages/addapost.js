import { Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function AddAPost() {

  const[title, setTitle] = useState('')
  const [img, setImg] = useState("");
  const [postText, setPostText] = useState("");
  const [category, setCategory] = useState("");


  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    console.log('12')
    try {
      const timestamp = serverTimestamp(); // Get server timestamp
      //await addDoc(collection(db, "posts"), { ...postData, timestamp }); // Include timestamp in post data
      await addDoc(postsCollectionRef, {
        category,
        title,
        img,
        postText,
        timestamp
      });
      console.log("Post added successfully");
      navigate("/");
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  };


  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Category:</label>
          <Input
            placeholder="Category..."
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Title:</label>
          <Input
            placeholder="Title..."
            onChange={(event) => {
            setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Image:</label>
          <Input
            placeholder="Image..."
            onChange={(event) => {
            setImg(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
            setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> POST </button>
      </div>
    </div>
  )
}

export default AddAPost