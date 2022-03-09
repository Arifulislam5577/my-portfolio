import React from "react";
import Fade from "react-reveal/Fade";
const Project = () => {
  return (
    <section className="Project min-h-screen bg-slate-900 ">
      <div className="flex gap-5 w-full lg:flex-row flex-col items-center justify-between min-h-screen">
        <Fade left>
          <div className="bg-yellow-400  w-full lg:w-1/5 hidden lg:block min-h-screen"></div>
        </Fade>
        <div className="container">
          <Fade bottom cascade>
            <div className=" h-full p-5 w-full lg:w-4/5 text-gray-50 text-right border-r-2 border-yellow-500 ">
              <h1 className="lg:text-5xl tracking-wider	 text-3xl my-3 font-extrabold uppercase text-gray-50">
                My Projects
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between text-center">
                <div className="card border-2 p-5 ">
                  <div className="project-img">
                    <img
                      src="https://res.cloudinary.com/dwrpcntox/image/upload/v1643377241/Shopping-cart/home_jtitnq.png"
                      alt="project"
                    />
                  </div>
                  <div className="project-content">
                    <h1 className="uppercase">Rolex - E-commerce</h1>

                    <div className="btn-group my-3">
                      <button className="p-1 uppercase px-10 border hover:bg-yellow-500 transition-all">
                        live
                      </button>
                      <button className="p-1 uppercase px-10 border hover:bg-yellow-500 transition-all">
                        code
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card border-2 p-5 ">
                  <div className="project-img">
                    <img
                      src="https://res.cloudinary.com/dwrpcntox/image/upload/v1643377241/Shopping-cart/home_jtitnq.png"
                      alt="project"
                    />
                  </div>
                  <div className="project-content">
                    <h1 className="uppercase">Rolex - E-commerce</h1>

                    <div className="btn-group my-3">
                      <button className="p-1 uppercase px-10 border hover:bg-yellow-500 transition-all">
                        live
                      </button>
                      <button className="p-1 uppercase px-10 border hover:bg-yellow-500 transition-all">
                        code
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card border-2 p-5 ">
                  <div className="project-img">
                    <img
                      src="https://res.cloudinary.com/dwrpcntox/image/upload/v1643377241/Shopping-cart/home_jtitnq.png"
                      alt="project"
                    />
                  </div>
                  <div className="project-content">
                    <h1 className="uppercase">Rolex - E-commerce</h1>

                    <div className="btn-group my-3">
                      <button className="p-1 uppercase px-10 border hover:bg-yellow-500 transition-all">
                        live
                      </button>
                      <button className="p-1 uppercase px-10 border hover:bg-yellow-500 transition-all">
                        code
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card border-2 p-5 ">
                  <div className="project-img">
                    <img
                      src="https://res.cloudinary.com/dwrpcntox/image/upload/v1643377241/Shopping-cart/home_jtitnq.png"
                      alt="project"
                    />
                  </div>
                  <div className="project-content">
                    <h1 className="uppercase">Rolex - E-commerce</h1>

                    <div className="btn-group my-3">
                      <button className="p-1 uppercase px-10 border hover:bg-yellow-500 transition-all">
                        live
                      </button>
                      <button className="p-1 uppercase px-10 border hover:bg-yellow-500 transition-all">
                        code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Project;
