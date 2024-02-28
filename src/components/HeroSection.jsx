import React from "react";
import { TypeAnimation } from "react-type-animation";
function HeroSection() {
  return (
    <section id="hero">
      <div className="flex flex-col gap-2 lg:flex-row md:items-center md:justify-center sm:justify-center ">
        <div className=" max-sm:text-center p-2 md:pl-[50px] lg:w-1/2 ">
          <h1 className="text-white text-4xl xl:text-8xl lg:text-6xl font-extrabold mb-7 sm:text-7xl md:text-5xl">
            Hello <span className="text-red-400">,</span> I'm <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Shivam Abraham",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={150}
              style={{
                fontSize: ".91em",
                marginTop: ".5em",
                display: "inline-block",
                color: "#ddd",
              }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7bE] text-lg lg:text-xl mb-4 sm:text-xl">
            Passionate and skilled React.js developer with a proven track record
            of creating robust, scalable, and high-performance web applications.
            With 3 Years of experience in frontend development, I specialize in
            leveraging the power of React.js to build dynamic user interfaces
            that deliver exceptional user experiences.
          </p>
          <div className="mt-5">
            <button className="px-6 py-3 mt-3 rounded-full bg-white mr-4 hover:bg-slate-700 hover:text-white ">
              Hire Me
            </button>
            <button className="px-6 py-3 mt-3 rounded-full bg-transparent border border-white hover:bg-white hover:text-black text-white ">
              Download CV
            </button>
          </div>
        </div>

        <div className="p-5 w">
          <div className="rounded-full max-sm:m-auto w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] sm:w-[450px] sm:h-[450px] relative">
            <img
              className=" absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2"
              src="/hero.png"
              alt="Shivam Abraham Hero Image"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
