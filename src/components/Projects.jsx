"use client";
import React, { useState } from "react";
function Projects() {
  const [tab, setTab] = useState("All");
  const projects = [
    {
      id: 1,
      name: "Calculator",
      src: "/projectsimages/calculator.png",
      cat: "Web App",
      href: "https://myreactcal.vercel.app/",
    },
    {
      id: 2,
      name: "Color Code Generator",
      src: "/projectsimages/colorcode.png",
      cat: "Web App",
      href: "https://colorcode-generator.vercel.app/",
    },
    {
      id: 3,
      name: "Counter",
      src: "/projectsimages/counter.png",
      cat: "Web App",
      href: "https://counter-app-mrabraham.vercel.app/",
    },
    {
      id: 4,
      name: "EasyBank Landing Page",
      src: "/projectsimages/easybank.png",
      cat: "Landing Page",
      href: "https://mr-abraham.github.io/Easybank/",
    },
    {
      id: 5,
      name: "Blogr Landing Page",
      src: "/projectsimages/blogr.png",
      cat: "Landing Page",
      href: "https://mr-abraham.github.io/Blogr/",
    },
    {
      id: 6,
      name: "Fylo Landing Page",
      src: "/projectsimages/fylo.png",
      cat: "Landing Page",
      href: "https://mr-abraham.github.io/Fylo/",
    },
    {
      id: 7,
      name: "Weather App",
      src: "/projectsimages/weather.png",
      cat: "Web App",
      href: "",
    },
    {
      id: 8,
      name: "Mind Game",
      src: "/projectsimages/mind.png",
      cat: "Web App",
      href: "",
    },
    {
      id: 9,
      name: "Login Page",
      src: "/projectsimages/login.png",
      cat: "Landing Page",
      href: "https://mr-abraham.github.io/Login/",
    },
    {
      id: 10,
      name: "Room HomePage",
      src: "/projectsimages/room.png",
      cat: "Landing Page",
      href: "https://mr-abraham.github.io/room-homepage/",
    },
    {
      id: 11,
      name: "Tip Calculator",
      src: "/projectsimages/tip.png",
      cat: "Web App",
      href: "https://mr-abraham.github.io/tipcalculator/",
    },
    {
      id: 12,
      name: "Todo App",
      src: "/projectsimages/todo.jpg",
      cat: "Web App",
      href: "https://alphatodo.vercel.app/",
    },
    {
      id: 13,
      name: "Password Generator",
      src: "/projectsimages/pwdGen.png",
      cat: "Web App",
      href: "https://pwdgenerate.vercel.app/",
    },
    {
      id: 14,
      name: "Currency Converter",
      src: "/projectsimages/currency.png",
      cat: "Web App",
      href: "https://currencify.vercel.app/",
    },
    {
      id: 15,
      name: "GitFound",
      src: "/projectsimages/gitfound.png",
      cat: "Web App",
      href: "https://gitfounnd.vercel.app/",
    }
  ];
  const [projectList, setProjectList] = useState(projects);

  return (
    <div id="projects" className="text-white md:mt-20">
      <h1 className="text-center text-4xl font-extrabold mb-10">Projects</h1>
      <div className="btn-contianer flex gap-2 md:gap-7 mb-8 justify-center items-start">
        <button
          onClick={(e) => {
            const target = e.currentTarget.innerHTML;
            setTab(target);
            console.log(tab);
            setProjectList(projects);
          }}
          style={{
            backgroundColor: tab == "All" && "#fff",
            color: tab == "All" && "#000",
          }}
          className="border md:px-8 px-5 py-2 rounded-md hover:bg-white hover:text-black"
        >
          All
        </button>
        <button
          onClick={(e) => {
            const WebProjects = projects.filter(
              (project) => project.cat === "Web App"
            );
            const target = e.currentTarget.innerHTML;
            setTab(target);
            setProjectList(WebProjects);
          }}
          style={{
            backgroundColor: tab == "Web App" && "#fff",
            color: tab == "Web App" && "#000",
          }}
          className="border md:px-8 px-5 py-2 rounded-md hover:bg-white hover:text-black"
        >
          Web App
        </button>
        <button
          onClick={(e) => {
            const LandingPages = projects.filter(
              (project) => project.cat === "Landing Page"
            );
            const target = e.currentTarget.innerHTML;
            setTab(target);
            setProjectList(LandingPages);
          }}
          style={{
            backgroundColor: tab == "Landing Pages" && "#fff",
            color: tab == "Landing Pages" && "#000",
          }}
          className="border md:px-8 px-5 py-2 rounded-md hover:bg-white hover:text-black"
        >
          Landing Pages
        </button>
      </div>
      <div className="p-5 grid gap-5 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {projectList.map((item, index) => {
          return (
            <section key={index} className="p-1">
              <figure className="rounded-xl  border-gray-600 border   overflow-hidden">
                <img
                  className="hover:transform hover:scale-150 transition-all  ease-in-out delay-400 "
                  style={{ maxWidth: "100%" }}
                  src={item.src}
                  alt="Project Image"
                />
              </figure>
              <figcaption>
                <a
                  className="inline-block mt-3 ml-2 text-xl font-medium hover:text-gray-500"
                  href={item.href}
                  target="_blank"
                >
                  {item.name}
                </a>
              </figcaption>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
