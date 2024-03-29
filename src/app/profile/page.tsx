"use client";

import React from "react";
import "animate.css";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import Router, { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged Out");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data.username);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-semibold animate__animated animate__bounce infinite">
          Coming Soon
        </h1>
        <hr className="w-16 h-1 bg-white mx-auto my-4" />
        <p className="text-lg animate__animated animate__fadeIn">
          Stay tuned for updates!
        </p>
        <h2 className="p-2 bg-red-600 rounded-xl m-2">
          {data === "nothing" ? (
            "Nothing"
          ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
          )}
        </h2>
        <hr />
        <button
          onClick={logout}
          className="p-2 rounded-lg mb-4 mt-8 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 capitalize font-sans ease-in-out duration-500"
        >
          Logout
        </button>
        <button
          onClick={getUserDetails}
          className="p-2 ml-2 rounded-lg mb-4 mt-8 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 capitalize font-sans ease-in-out duration-500"
        >
          {data}
        </button>
      </div>
    </div>
  );
}
