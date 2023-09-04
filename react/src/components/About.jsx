import React from "react"; 

export default function About() {
  return(
    <section id="about">
      <div className="container mx-suto flex px-10 py-20 md: flex-row flex-col items-center">
        <div ClassName="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md: items-start md:text-left mb-16 md:mb-0 items-center text0-center">
          <h1 ClassName="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Beth L. Haynes
             <br ClassName="hidden lg:inline-block" /> I am currently a full-stack web development student.
          </h1>
          <p ClassName="mb-8 leading-relaxed">
            After a number of years in Brokerage Operations, I am persuing a new career in web development.
          </p>
          <div ClassName="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white gt-green 500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                I would like to work with you
                </a>
                <a
                  href="#portfolio"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    See my projects
                  </a>
          </div>
      </div>
        <div className="lg:max-w-lb lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./assets/IMG_2048.jpg" 
          />
        </div>
      </div>
    </section>
  );
}