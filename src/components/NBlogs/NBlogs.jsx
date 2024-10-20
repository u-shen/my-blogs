import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./NBlogs.css";

function NBlogs() {
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [desc, setDesc] = useState("");
  const navigateTo = useNavigate();
  const blogsColRef = collection(db, "blogs");
  const addBlog = async () => {
    try {
      await addDoc(blogsColRef, {
        title,
        desc,
        brief,
        date: serverTimestamp(),
      });
      navigateTo("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="NBlogs-container">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="text"
        placeholder="Blogs Title ..."
      />
      <input
        onChange={(e) => setBrief(e.target.value)}
        type="text"
        name="text"
        placeholder="Short Desc ..."
      />
      <textarea
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Blogs Description ..."
      ></textarea>
      <button onClick={addBlog}>Add</button>
    </div>
  );
}

export default NBlogs;
