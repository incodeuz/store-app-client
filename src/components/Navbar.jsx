import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-lg font-bold">Admin Panel'</h1>
      <button className="border px-3 py-1 rounded-md border-black">
        Log in
      </button>
    </div>
  );
};

export default Navbar;
