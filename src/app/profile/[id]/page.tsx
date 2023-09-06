import React from "react";
import "animate.css";

export default function userProfile({ params }: any) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-semibold animate__animated animate__bounce infinite">
          Coming Soon
        </h1>
        <hr className="w-16 h-1 bg-white mx-auto my-4" />
        <p className="text-lg animate__animated animate__fadeIn">
          Profile Page{" "}
          <span className="px-2 bg-red-600 rounded">{params.id}</span>
        </p>
      </div>
    </div>
  );
}
