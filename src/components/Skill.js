import React from "react";
import Fade from "react-reveal/Fade";
const Skill = () => {
  return (
    <section className=" h-screen  hero   ">
      <div className="flex gap-5 w-full lg:flex-row flex-col items-center justify-between h-screen">
        <div className="container ">
          <Fade top cascade>
            <div className=" w-full p-5 lg:w-4/5  border-l-2 border-yellow-500">
              <h1 className="lg:text-5xl tracking-wider	 text-3xl my-3 font-extrabold uppercase text-gray-50">
                my skills
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between">
                <div className="card border-2 p-5 ">
                  <h2 className="text-xl uppercase font-bold text-yellow-400 my-3">
                    Language
                  </h2>
                  <ol className="uppercase text-gray-50 flex flex-col gap-2">
                    <li>Html5</li>
                    <li>css3 with sass</li>
                    <li>Javascript</li>
                  </ol>
                </div>
                <div className="card border-2 p-5 ">
                  <h2 className="text-xl uppercase font-bold text-yellow-400 my-3">
                    Framework & library
                  </h2>
                  <ol className="uppercase text-gray-50 flex flex-col gap-2">
                    <li>Bootstrap 5</li>
                    <li>Tailwind css</li>
                    <li>React Js</li>
                  </ol>
                </div>
                <div className="card border-2 p-5 ">
                  <h2 className="text-xl uppercase font-bold text-yellow-400 my-3">
                    Backend
                  </h2>
                  <ol className="uppercase text-gray-50 flex flex-col gap-2">
                    <li>Node Js</li>
                    <li>Express Js</li>
                    <li>MongoDb</li>
                  </ol>
                </div>
                <div className="card border-2 p-5 ">
                  <h2 className="text-xl uppercase font-bold text-yellow-400 my-3">
                    Tools
                  </h2>
                  <ol className="uppercase text-gray-50 flex flex-col gap-2">
                    <li>vs code</li>
                    <li>github</li>
                    <li>heroku</li>
                  </ol>
                </div>
              </div>
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

export default Skill;
