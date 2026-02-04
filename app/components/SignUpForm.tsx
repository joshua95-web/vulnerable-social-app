"use client";
import React from "react";
import { useState } from "react";
import { CreateUser } from "../lib/actions/CreateUser";

export default function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("What's being submitted:", userName, "<user password>", email);

    //Auth0 api for create user here, need to write the action scripts on the auth0 dashboard > authentication > database > custom database.
    // It will need to have the same hash as the one on the Neon database and compare the two to authenticate, then return the user info needed
    // for the front end.

    await CreateUser(userName, password, email);
  };

  return (
    <main className="min-h-screen flex items-center justify-center font-mono">
      <div className="rounded-2xl shadow-2xl shadow-amber-700  border-amber-700 border-4 p-10  gap-8 flex flex-col text-center justify-center bg-gray-500 text-slate-200">
        <h1 className="text-3xl font-bold">Create Your Account</h1>
        <form
          className="text-slate-200 flex gap-8 flex-col items-center text-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col text-slate-200 gap-2">
            <input
              className="text-amber-300 p-2 font-bold border border-slate-400"
              name="userName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Create Your Username"
            />
            <input
              className="text-amber-300 p-2 font-bold border border-slate-400"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Set Your Email"
            />
            <input
              className="text-amber-300 p-2 font-bold border border-slate-400"
              name="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Your Password"
            />
          </div>
          <button
            type="submit"
            className="text-2xl bg-amber-700 p-3 rounded-2xl hover:bg-amber-500 hover:shadow-2xl hover:shadow-amber-500 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
