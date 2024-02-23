import React from 'react'
import { ShimmerCategoryList } from "react-shimmer-effects";

const ShimmerRecommended = () => {
  return (
    <div className='shimmer-two'>
        <ShimmerCategoryList items={10}/>
    </div>
  )
}

export default ShimmerRecommended