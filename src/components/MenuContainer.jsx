import React from 'react'

const MenuContainer = () => {
  return (
    <section id='Menu' className='w-full my-6'>
        <div className='w-full flex flex-col items-center justify-center'>
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-r from-orange-300 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                Our Hot Dishes
            </p>

            <div className='w-full flex item-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none'>
                <div className='group bg-white w-24 min-w-[94px] h-28 cursor-pointer rounded-lg shadow-lg'></div>
            </div>
        </div>
    </section>
  )
}

export default MenuContainer