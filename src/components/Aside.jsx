import React from "react";
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";

const Aside = (props) => {
  return (
    <aside className={`bg-black text-white p-4 absolute h-dvh w-full top-0 duration-500 -translate-x-full full-hide ${props.className} sm:w-80`} >
      <button className="inline-block mt-1" onClick={props.toggleMenu}>
        <FaX size={24} />
      </button>
    </aside>
  );
};

export default Aside;