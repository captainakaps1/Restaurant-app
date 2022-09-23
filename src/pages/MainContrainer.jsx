import React, { useState, useEffect } from "react";
import Home from "./Home";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "../components/RowContainer";
import { useStateValue } from "../contextProvider/StateProvider";
import MenuContainer from "../components/MenuContainer";
 
export const MainContrainer = () => {
  const [{foodItems}] = useStateValue();
  const [scollValue, setScollValue] = useState(0);

  useEffect(() => {
     
  }, [scollValue])

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <Home />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-r from-orange-300 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScollValue(-200)}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScollValue(200)}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>

        <RowContainer scollValue={scollValue} flag={true} data={foodItems?.filter(item => item.category === 'fruits')}/>
      </section>
      <MenuContainer/> 
    </div>
  );
};
