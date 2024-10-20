import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const blogsColRef = collection(db, "blogs");
  useEffect(() => {
    const getFromFirestore = async () => {
      const data = await getDocs(blogsColRef);
      const filtredData = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setBlogs(filtredData);
    };
    getFromFirestore();
  }, []);
  return (
    <div className="blogs-grid-container">
      {blogs?.map((blog) => {
        return (
          <NavLink to={`/blogs/${blog.id}`}>
            <div key={blog.id}>
              <div className="blogs-grid-item">
                <h4 className="blogs-title">{blog.title}</h4>
                <p className="blogs-brief">{blog.brief}</p>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Home;
