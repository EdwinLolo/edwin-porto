import React from "react";
import "./Font.css";

const accordionData = [
  {
    id: 1,
    title: "01 Programming Languages",
    content: [
      "React JS",
      "React Native",
      "Kotlin",
      "Java",
      "Python",
      "C",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: 2,
    title: "02 Experience",
    content: [
      "Intro to Internet Technology - FTI Laboratory Assistant",
      "Database - FTI Laboratory Assistant",
    ],
  },
  {
    id: 3,
    title: "03 Languages",
    content: [
      "Indonesian (Native)",
      "English (Professional working proficiency)",
    ],
  },
];

function About() {
  return (
    <div
      className="box-border w-full h-fit p-10 md:px-20 md:py-10 bg-[#E5E5E5]"
      id="About"
    >
      <h1
        style={{ fontFamily: "Neue Normal, sans-serif" }}
        className="text-5xl"
      >
        About Me
      </h1>
      <div className="w-full mt-6 border-b-[3px] border-[#000000]"></div>

      <div className="box-border flex flex-col w-full h-full gap-12 pt-10 md:flex-row">
        <div className="items-center w-full aboutMeContainer md:w-2/5">
          <h1
            style={{ fontFamily: "Neue Normal, sans-serif" }}
            className="text-md md:text-lg lg:text-2xl"
          >
            I am an undergraduate student majoring in Informatics with a strong
            passion for application development, web development, and software
            engineering.
          </h1>
          <br />
          <h1
            style={{ fontFamily: "Neue Normal, sans-serif" }}
            className="text-md md:text-lg lg:text-2xl"
          >
            My academic background has equipped me with a solid foundation in
            programming and problem-solving, while hands-on projects have
            allowed me to apply these skills practically. My goal is to continue
            developing my technical abilities and contribute to innovative tech
            solutions.
          </h1>
          <div className="inline-flex justify-center mt-4 sm:ml-auto sm:justify-start">
            <a className="text-black-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>

            <a className="ml-3 text-black-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-black-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full accordion md:w-3/5">
          <h1
            style={{ fontFamily: "Neue Normal, sans-serif" }}
            className="text-lg md:text-3xl"
          >
            Your one stop for:
          </h1>
          <div className="w-full join join-vertical">
            {accordionData.map((item) => (
              <div
                key={item.id}
                className="border collapse collapse-arrow join-item border-base-300"
              >
                <input
                  type="radio"
                  name="my-accordion-4"
                  defaultChecked={item.id === 1}
                />
                <div className="text-xl font-medium collapse-title border-b-[3px] border-[#000000]">
                  <h1 style={{ fontFamily: "Neue Normal, sans-serif" }}>
                    {item.title}
                  </h1>
                </div>
                <div className="collapse-content">
                  {/* Gunakan Flexbox untuk menata daftar item dalam 2 kolom per baris */}
                  <ul className="flex flex-wrap">
                    {item.content.map((point, index) => (
                      <li key={index} className="w-1/2 mb-2 break-words">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
