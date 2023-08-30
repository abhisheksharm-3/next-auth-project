"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-2"
      />
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-2"
      />
      <button
        className="p-2 border-blue-100 rounded-lg mb-4 mt-8 focus:outline-none bg-blue-200 hover:bg-blue-900"
        onClick={onLogin}
      >
        Login
      </button>
      <Link
        href="/signup"
        className="bg-red-500 p-1 hover:bg-red-900 rounded-lg"
      >
        Visit Signup Page
      </Link>
    </div>
  );
}
