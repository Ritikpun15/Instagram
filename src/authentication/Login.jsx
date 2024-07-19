import React, { useState } from "react";
import login from "../assets/login.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
  }
  
  return (
    <>
      <div className="border px-6 py-5 w-80">
        <div className="flex justify-center py-8">
          <img src={login} width={180} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email"></label>
          <input
            type="text"
            id="email"
            placeholder="Email address"
            value={email}
            className="border my-2 text-xs p-2 w-full outline-gray-300 bg-neutral-100"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            className="border text-xs p-2 w-full outline-gray-300 bg-neutral-100"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="my-3 bg-sky-500 text-white py-2 text-sm font-semibold rounded-lg"
          onClick={handleLogin}>
            Log in
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
