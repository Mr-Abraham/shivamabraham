import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import MenuOVer from "./MenuOVer";
function Navbar({ Navlinks }) {
  const [navOn, setNavOn] = useState(true);
  return (
    <div className="sticky bg-black top-0 left-0 right-00  w-full z-10">
      <nav className="flex items-center justify-between mb-6 mt-4 py-0 md:px-10 max-sm:px-2 xl:px-32">
        <div className="logo">
          <img width={70} src="/hero.png" alt="shivam abraham portfolio logo" />
        </div>
        <ul className="hidden lg:flex gap-8">
          {Navlinks.map((item, index) => (
            <li key={index}>
              <a
                className="text-[#fff] font-semibold  text-xl"
                href={item.href}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        {!navOn && <MenuOVer />}
        <div className="hidden max-lg:block z-20">
          <button
            onClick={() => {
              setNavOn(!navOn);
            }}
            className=" cursor-pointer  text-white text-5xl hover:text-orange-200"
          >
            {navOn ? (
              <CiMenuFries className="z-25" />
            ) : (
              <IoClose className="z-25" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
