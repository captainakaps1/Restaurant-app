import React, { useState } from 'react'
import {IoFastFood} from 'react-icons/io5'
import { categories } from '../utils/data'
import { motion } from 'framer-motion'
import RowContainer from './RowContainer'
import { useStateValue } from '../contextProvider/StateProvider'

const MenuContainer = () => {
  const [{foodItems}] = useStateValue()
  const [filteredCategory, setFilter] = useState("chicken");
  return (
    <section id='Menu' className='w-full my-6'>
        <div className='w-full flex flex-col items-center justify-center'>
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-r from-orange-300 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                Our Hot Dishes
            </p>

            <div className='w-full flex item-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'>
                {categories && categories.map(category => (
                  <motion.div whileTap={{ scale: 0.75}} key={category.id} onClick={() => setFilter(category.urlParamName)} className={`group ${filteredCategory === category.urlParamName ? 'bg-cartNumBg': 'bg-card'} hover:bg-cartNumBg w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center`}>
                  <div className={`w-10 h-10 rounded-full ${filteredCategory === category.urlParamName ? 'bg-card': 'bg-cartNumBg'} group-hover:bg-card flex items-center justify-center`}>
                    <IoFastFood className={`${filteredCategory === category.urlParamName ? 'text-textColor': 'text-card'} group-hover:text-textColor text-lg`}/>
                  </div>
                  <p className={`text-sm ${filteredCategory === category.urlParamName ? 'text-card': 'text-textColor'} group-hover:text-card`}>{category.name}</p>
                </motion. div>
                ))}
            </div>

            <div className='w-full'>
              <RowContainer flag={false} data={foodItems?.filter(item => item.category === filteredCategory)}/>
            </div>
        </div>
    </section>
  )
}



export default MenuContainer