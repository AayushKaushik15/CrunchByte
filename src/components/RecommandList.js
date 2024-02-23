import React, { useState } from 'react'
import Listing, { withPromotedLabel } from './Listing';

const RecommandList = ({list}) => {

  const [effect, setEffect] = useState(false);

  function clickHandler () {
    setEffect(!effect);
  }

  const {title, itemCards} = list?.card?.card;
  console.log(list)
  return (
    <div className='recommend-list'>
        <div className="top-bar-list" onClick={clickHandler}>
            <h3>{title} - ({itemCards.length})</h3>
            <i className={effect ? "fa-solid fa-angle-up" : "fa-solid fa-chevron-down"}></i>
        </div>
        <div>
          {
            effect && itemCards.map((value) => (
              <Listing infoList = {value} key = {value.card.info.id}/>
            ))
          }
        </div>
    </div>
  )
}

export default RecommandList;