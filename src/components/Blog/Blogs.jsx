import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./blog.css";

function blog() {
  const [blog, setBlog] = useState({});
  const { BlogsId } = useParams();
  const colRef = collection(db, "blogs");
  useEffect(() => {
    const fetchDocs = async () => {
      const data = await getDocs(colRef);
      const onlyDocs = data.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      const targetDoc = onlyDocs.filter((doc) => {
        return BlogsId === doc.id;
      });
      setBlog(targetDoc);
    };
    fetchDocs();
  }, []);
  return (
    <>
      <div className="blog-post-container">
        <h2 className="blog-title">{blog[0]?.title}</h2>
        <p className="blog-desc">{blog[0]?.desc}</p>
      </div>
    </>
  );
}

export default blog;
