import React, { useState } from "react";
import login from "../assets/login.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };


  return (
    <div>
      <div className="border px-9 py-5 w-80">
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
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            className="border my-2 text-xs p-2 w-full outline-gray-300 bg-neutral-100"
            onChange={(e) => setUsername(e.target.value)}
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
          onClick={handleSignUp}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
