import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

function RowContainer({ flag, data, ref }) {
  console.log(data )
  return (
    <div
    ref={ref}
      className={`w-full flex items-center gap-3 my-12 ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap "
      }`}
    >
      {data && data.map((item) => (
        <ItemCard key={item.id} item={item}/>
      ))}
      
    </div>
  );
}

const ItemCard = ({item}) => {
  return (
    <div className="w-full min-w-[300px] md:w-350 md:min-w-[350px] h-auto my-12 shadow-sm hover:drop-shadow-lg bg-cardOverlay rounded-lg p-2 backdrop-blur-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="https://firebasestorage.googleapis.com/v0/b/restaurant-app-f1057.appspot.com/o/Images%2F1649436810870-i5.png?alt=media&token=3b35e3b6-3e02-450b-807a-98b2c4138404"
            alt="icecreams"
            className="w-40 -mt-8 drop-shadow-2xl"
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
  )
}

export default RowContainer;
