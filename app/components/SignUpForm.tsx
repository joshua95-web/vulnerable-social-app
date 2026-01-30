"use client";
import React from "react";
import { useState } from "react";
import { CreateUser } from "../actions/CreateUser";

export default function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("What's being submitted:", userName, "<user password>", email);

    await CreateUser(userName, password, email);
  };

  return (
    <main>
      <div className="min-h-7 w-3xl flex text-center justify-center bg-slate-300 text-black">
        <form className="text-gray-900" onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Create Your Username"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Set Your Email"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create Your Password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
