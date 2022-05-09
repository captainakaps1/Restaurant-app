import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const Home = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="Home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam
          veniam deserunt magnam obcaecati nesciunt nobis nisi laboriosam
          dolores itaque, voluptatibus, vero deleniti, quo nihil est doloribus
          sed tenetur dolore?
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-300 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 items-center relative">
        <img
          src={HeroBg}
          alt="HeroBg"
          className="ml-auto h-420 w-full lg:h-650 lg:w-auto"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className=" lg:w-190 p-4 bg-cardOverlay backdrop-blur- rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  alt="Ice cream"
                  className="lg:w-40 w-20 -mt-10 lg:-mt-20"
                />
                <p className="lg:text-xl text-base font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="text-lighttextGray text-[12px] lg:text-sm font-semibold my-1 lg:my-3">
                  {n.description}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span>$</span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
