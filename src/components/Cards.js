import React from 'react'
import Shimmer from './shimmer';

const Cards = ({cardInfo}) => {


  const {name,cuisines, avgRating, aggregatedDiscountInfoV3, cloudinaryImageId, sla} = cardInfo?.info;

  return (
    <div className="card-container">
        <div className='img-tag'>
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId} alt="" />
          <p className='offer'>{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</p>
        </div>
        <div className="text-section">
          <p className='nameTag'>{name}</p>
        </div>

        <div className="rating-toggle">
          <i className="fa-solid fa-star"></i> <p className='rating'>{avgRating}</p> <span>•</span> 
          <p className='rating timing'>{sla.slaString}</p>
        </div>
        <p className='cuisines'>{cuisines.join(", ")}</p>
    </div>
  )
}

export default Cards