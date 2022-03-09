import { Envelope } from "phosphor-react";
import React from "react";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <section className="About h-screen bg-slate-900 ">
      <div className="flex gap-5 w-full lg:flex-row flex-col items-center justify-between h-screen">
        <Fade left>
          <div className="bg-yellow-400 h-full w-full lg:w-1/5 hidden lg:block "></div>
        </Fade>
        <div className="container">
          <Fade bottom cascade>
            <div className=" h-full p-5 w-full lg:w-4/5 text-gray-50 text-right border-r-2 border-yellow-500 ">
              <h1 className="lg:text-5xl tracking-wider	 text-3xl my-3 font-extrabold uppercase text-gray-50">
                Why Hire Me For Your Next Project ?
              </h1>
              <p className="lg:w-2/3 w-full ml-auto">
                I am Md Ariful Islam, I am a Javascript developer, and I’m very
                passionate and desicated to my work. I have acquired the skills
                and knowledge necessary to make your project a success.
              </p>
              <p className="my-5 flex items-center justify-end">
                <Envelope size={32} color="#eab308" className="mr-3" />
                mdarifulislamm370@gmail.com
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
