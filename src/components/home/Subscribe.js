import React from "react";

function Subscribe() {
  return (
    <div className="bg-gray-50 py-16 px-5">
      <p className="lg:text-3xl md:text-2xl text-xl text-center">
        Subscribe And Get Notified About Our Latest Offers
      </p>
      <div className="flex items-center max-w-5xl justify-center mx-auto mt-7">
        <input
          type="text"
          className="h-14 rounded-l-2xl border-y border-l shadow max-w-[700px] w-full focus:outline-none px-3"
        />
        <button className="bg-gray-500 text-white rounded-r-2xl border-r border-y text-sm shadow h-14 px-5 uppercase hover:bg-red-600 hover:text-white focus:outline-none duration-500 ease-in">
          Get Notified
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
