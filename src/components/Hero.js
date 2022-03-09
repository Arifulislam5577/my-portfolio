import React from "react";
import Fade from "react-reveal/Fade";
const Hero = () => {
  return (
    <section className=" h-screen  hero   ">
      <div className="flex gap-5 w-full lg:flex-row flex-col items-center justify-between h-screen">
        <div className="container ">
          <Fade top cascade>
            <div className="hero-text w-full p-5 lg:w-4/5  border-l-2 border-yellow-500">
              <h1 className=" tracking-wider	 text-3xl my-3 font-extrabold uppercase text-gray-50">
                Hi, i am
              </h1>

              <h1 className="lg:text-5xl tracking-wider	 text-3xl my-3 font-extrabold uppercase text-gray-50">
                md ariful islam
              </h1>

              <h1 className="lg:text-5xl tracking-wider	 text-3xl my-3 font-extrabold uppercase text-gray-50">
                <span className="text-yellow-400"> Javascript </span>Developer
              </h1>

              <p className="lg:w-2/3  w-full text-gray-100 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, assumenda deserunt cum quas magnam ratione porro vel
                beatae incidunt esse quis eligendi quia illum voluptatibus
                impedit numquam ducimus dolores nam.
              </p>

              <button className="bg-yellow-400 p-3 px-10 font-bold text-gray-50">
                Hire Me
              </button>
            </div>
          </Fade>
        </div>

        <Fade right>
          <div className=" text-gray-50 hidden lg:block w-full  lg:w-1/5   bg-yellow-400 h-full  "></div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
