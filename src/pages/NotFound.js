import React from "react";
import Header from "../components/header/Header";
import { Link, useNavigate } from "react-router-dom";
// import  notFound  from "../assets/404-error.gif"

function NotFound() {
  return (
    <>
      <Header />
      <div>
      <main class="h-96 w-full flex flex-col justify-center items-center bg-white">
	<h1 class="text-9xl font-extrabold text-black tracking-widest">404</h1>
	<div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button class="mt-5">
      <a
        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
        <Link to="/">Home</Link>
        </span>
      </a>
    </button>
</main>
  </div>

      
    </>
  );
}

export default NotFound;
