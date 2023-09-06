"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log(response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup Failed", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (
      user.email.length > 6 &&
      user.password.length > 8 &&
      user.username.length > 2
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-10 w-full h-full object-cover"
      >
        <source src="/bg-vid.mp4" />
      </video>

      <div
    className="absolute z-20 w-full h-full bg-opacity-50 backdrop-filter backdrop-blur-sm"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
  ></div>

      <div className="flex z-50 flex-col items-center justify-center min-h-max bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 px-10 py-8">
        <h1 className="font-sans font-semibold text-2xl">{loading ? "Processing" : "Signup"}</h1>
        <hr />
        <label className="font-sans font-light pt-6 pb-2" htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="coolusername123"
          className="p-2 text-white bg-transparent border rounded-lg font-sans"
        />
        <label className="font-sans pt-3 pb-2 font-normal" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="test@test.com"
          className="p-2 text-white bg-transparent border rounded-lg font-sans"
        />
        <label className="pt-3 pb-2 font-sans font-normal" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="unhackablepassword"
          className="p-2 text-white bg-transparent border rounded-lg font-sans"
        />
        <button
  className="p-2 rounded-lg mb-4 mt-8 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 capitalize font-sans ease-in-out duration-500"
  onClick={onSignup}
>
  {buttonDisabled ? "Fill the info first" : "Signup"}
</button>

<Link
  href="/login"
  className="bg-gray-300 p-2 hover:bg-gray-400 rounded-lg text-gray-700 capitalize font-sans ease-in-out duration-500"
>
  Visit Login Page
</Link>
      </div>
    </div>
  );
}
