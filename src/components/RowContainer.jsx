import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

function RowContainer({ flag }) {
  return (
    <div
      className={`w-full my-12 ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 md:w-350 h-auto my-12 backdrop-blur-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="https://firebasestorage.googleapis.com/v0/b/restaurant-app-f1057.appspot.com/o/Images%2F1649436810870-i5.png?alt=media&token=3b35e3b6-3e02-450b-807a-98b2c4138404"
            alt="icecreams"
            className="w-40 -mt-8"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full cursor-pointer hover:shadow-md flex items-center justify-center bg-red-500"
          >
            <MdShoppingCart className="text-white" />
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Strawberry
          </p>
          <p className="mt-2 text-sm text-gray-500">45 Calories</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-red-500">$</span> 5.25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowContainer;
