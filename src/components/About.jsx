"use client";
import React from "react";
import { useState } from "react";
function About() {
  const [skillsactive, setSkillActive] = useState(true);
  const [certActive, setCertActive] = useState(false);

  const skills = [
    {
      id: 1,
      title: "HTML/CSS/SCSS/JavaScript",
    },
    {
      id: 2,
      title: "Responsive Design",
    },
    {
      id: 3,
      title: "Version Contro",
    },
    {
      id: 4,
      title: "React.js Development",
    },
    {
      id: 5,
      title: "Cross-Browser Compatibility",
    },
    {
      id: 6,
      title: "Creative Coding",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Certified JavaScript Developer",
      desc: "lorem ipsum doller",
    },
  ];

  return (
    <section
      id="about"
      className="flex gap-5 md:mt-10 justify-between items-start py-10 text-white"
    >
      <div className="image w-fit  hidden xl:block ">
        <img src="/mac.jpg" alt="About" />
      </div>
      <div className="description xl:w-3/4 max-sm:text-center sm:px-5 md:px-12">
        <div className="mb-5">
          <h1 className="text-4xl mb-3 font-extrabold text-gray-200 ">
            About Me
          </h1>
          <p className="text-gray-300 mt-5 max-sm:px-5">
            Passionate and creative frontend developer with a strong focus on
            building intuitive and engaging user interfaces. With 3 years of
            experience in web development, I have a deep understanding of
            frontend technologies and best practices, allowing me to create
            seamless and visually appealing experiences for users.
          </p>
        </div>

        <div className="p-0 m-0 ">
          <div className="btn-container flex gap-10 max-sm:justify-center mb-3 py-3">
            <button
              style={{
                backgroundColor: skillsactive && "#fff",
                color: skillsactive && "#000",
              }}
              onClick={() => {
                setCertActive(false);
                setSkillActive(true);
              }}
              className="border px-6 py-2 rounded-md hover:bg-white hover:text-black"
            >
              Skills
            </button>
            <button
              onClick={() => {
                setCertActive(true);
                setSkillActive(false);
              }}
              style={{
                backgroundColor: certActive && "#fff",
                color: certActive && "#000",
              }}
              className="border px-6 py-2 rounded-md hover:bg-white hover:text-black"
            >
              Certifications
            </button>
          </div>
          <div className="result mt-5 h-auto transition-all ease-out">
            {skillsactive &&
              skills.map((item, index) => (
                <div key={index}>
                  <h3
                    key={item.id}
                    className="text-xl font-extrabold my-2 text-gray-400"
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
            {certActive &&
              certifications.map((item, index) => (
                <div key={index}>
                  <h3
                    key={item.id}
                    className="text-xl font-extrabold text-gray-400"
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
