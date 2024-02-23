import React from 'react'
import { useDispatch } from 'react-redux';
import { addItems } from '../constants/cartSlice';

const Listing = ({infoList}) => {

    const {name, price,imageId,defaultPrice,description} = infoList?.card?.info;

    const dispatch = useDispatch();

    function handleClick (infoList) {
      dispatch(addItems(infoList))
      console.log(infoList)
    }

  return (
    <div className="listing-container">
        <div className="nested-listing-one">
            <h4>{name}</h4>
            <p><i className="fa-solid fa-indian-rupee-sign"></i> {price/100 || defaultPrice/100}/-</p>
            <p className='description'>{description}</p>
        </div>
        <div className="nested-listing-two">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+imageId} alt="" />
            <button onClick={() => handleClick(infoList)}>Add +</button>
        </div>
    </div>
  )
}



export default Listing