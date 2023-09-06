"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false)

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log(response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup Failed", error);
      toast.error(error.message);
    } finally{
      setLoading(false);
    }
  };


  React.useEffect(() => {
    if(user.email.length > 6 && user.password.length > 8 && user.username.length > 2){
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user])
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Signup" }</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="p-2 text-black"
      />
      <label htmlFor="email">email</label>
      <input
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-2 text-black"
      />
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-2 text-black"
      />
      <button
        className="p-2 border-blue-100 rounded-lg mb-4 mt-8 focus:outline-none bg-blue-200 hover:bg-blue-900"
        onClick={onSignup}
      >
        {buttonDisabled ? "Fill the info first" : "Signup"}
      </button>
      <Link
        href="/login"
        className="bg-red-500 p-1 hover:bg-red-900 rounded-lg"
      >
        Visit Login Page
      </Link>
    </div>
  );
}
