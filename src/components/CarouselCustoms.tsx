import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export const CustomPrevArrow = ({ onClick }: any) => (
  <div className="text-white opacity-50 text-4xl md:text-6xl absolute top-[50%] translate-y-[-50%] cursor-pointer z-10 left-6 xl:-left-12" onClick={onClick}>
    <MdKeyboardArrowLeft />
  </div>
)

export const CustomNextArrow = ({ onClick }: any) => (
  <div className="text-white opacity-50 text-4xl md:text-6xl absolute top-[50%] translate-y-[-50%] cursor-pointer z-10 right-6 lg:-right-12" onClick={onClick}>
    <MdKeyboardArrowRight />
  </div>
)
