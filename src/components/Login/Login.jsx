import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  const handleLogin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
    navigateTo("/nblogs");
  };
  return (
    <div className="input-container">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        placeholder="USHEN Email ..."
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="USHEN Password ..."
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
