import React, { useState } from 'react'
import recommendMenu from '../constants/Restaurants/recommendMenu'
import { Link, useParams } from 'react-router-dom';
import RecommandList from './RecommandList';
import ShimmerRecommended from './ShimmerRecommended';

const RestaurantMenu = () => {

    const {resId} = useParams();

    const {showData} = recommendMenu(resId);
    
    const [bookmark, setBookmark] = useState(false);
    
    if (showData == null) {
        return <ShimmerRecommended/>
    }

    const {areaName, avgRating, totalRatingsString, costForTwoMessage, cuisines, name, sla} = showData?.data?.cards[0]?.card?.card?.info;

    const recommendData = showData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const recommendFilter = recommendData.filter(value => value?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    const toggleBookmark = () => {
        setBookmark(!bookmark);
    };

  return (
    <div className="restaurant-menu">
        <div className="top-bar">
            <h3>{name}</h3>
            {
                <i
                    className={bookmark ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}
                    onClick={toggleBookmark}
                ></i>
            }
        </div>
        <div className="flex-div">
            <div className='mid-bar'>
                <p>{cuisines.join(", ")}</p>
                <span>{areaName}</span><span>, {sla.lastMileTravelString}</span>
            </div>
            <div className="right-bar">
                <p><i class="fa-regular fa-star"></i>{avgRating}</p>
                <p>{totalRatingsString}</p>
            </div>
        </div>
        <div className="last-div">
            <p><i class="fa-solid fa-stopwatch"> </i>{sla.slaString}</p>
            <p>{costForTwoMessage}</p>
        </div>

        <div className=''>
            {
                recommendFilter.map((value, index) => (
                    <RecommandList list = {value} key = {index}/>
                ))
            }
        </div>
    </div>
  )
}

export default RestaurantMenu