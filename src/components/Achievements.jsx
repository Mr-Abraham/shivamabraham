"use client";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";
function Achievements() {
  const achievements = [
    { title: "Projects", value: 12 },
    { title: "Clients", value: 5 },
    { title: "Awards", value: 10 },
  ];
  return (
    <div className=" text-white">
      <div className="text-whtie flex border rounded-lg justify-between py-6 px-6 w-[80%] m-auto">
        {achievements.map((item, index) => (
          <div key={index} className="text-center">
            <h1 className="text-white text-6xl font-bold mb-3">
              <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={item.value}
              />
            </h1>
            <p className="text-3xl font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
