import React from "react";

function MenuOVer() {
  const Navlinks = [
    { href: "#hero", title: "Home" },
    { href: "#about", title: "About" },
    { href: "#projects", title: "Projects" },
    { href: "#blog", title: "Blog" },
  ];
  return (
    <div className="none max-lg:flex z-10  bg-[#000] absolute w-full top-0 left-0  justify-center items-center  ">
      <ul className="flex flex-col gap-10 py-10 ">
        {Navlinks.map((item, index) => (
          <li key={index}>
            <a className="text-white text-2xl font-semibold" href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuOVer;
