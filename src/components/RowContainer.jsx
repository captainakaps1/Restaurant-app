import React, { useEffect, useRef } from "react";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag, data, scollValue }) => {
  const rowContainer = useRef();
  useEffect(() => {
     rowContainer.current.scollLeft += scollValue;
  }, [scollValue])
  
  return (
    <div
       ref={rowContainer}
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
            src={item.imageURL}
            alt="icecreams"
            className="w-40 h-40 -mt-8 drop-shadow-2xl"
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
            {item.title}
          </p>
          <p className="mt-2 text-sm text-gray-500">{item.calories} Calories</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-red-500">$</span> {item.price}
            </p>
          </div>
        </div>
      </div>
  )
}

export default RowContainer;
