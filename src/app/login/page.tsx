"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log(response.data);
      toast.success("Login successful");
      router.push("/profile");
    } catch (error) {
      console.log("Login Failed", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (user.email.length > 6 && user.password.length > 8) {
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

      <div className="absolute z-20 w-full h-full bg-opacity-50 backdrop-filter backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>

      <div className="flex z-50 flex-col items-center justify-center min-h-max bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 px-10 py-8">
        <h1 className="font-sans font-semibold text-2xl">{loading ? "Processing" : "Login"}</h1>
        <hr />
        <label className="font-sans font-light pt-6 pb-2" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
          className="p-2 text-white bg-transparent border rounded-lg font-sans"
        />
        <label className="pt-3 pb-2 font-sans font-normal" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="yourunhackablepassword"
          className="p-2 text-white bg-transparent border rounded-lg font-sans"
        />
        <button
          className="p-2 rounded-lg mb-4 mt-8 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 capitalize font-sans ease-in-out duration-500"
          onClick={onLogin}
        >
          {buttonDisabled ? "Fill the info first" : "Login"}
        </button>
        <Link
          href="/signup"
          className="bg-gray-300 p-2 hover:bg-gray-400 rounded-lg text-gray-700 capitalize font-sans ease-in-out duration-500"
        >
          Visit Signup Page
        </Link>
      </div>
    </div>
  );
}
