import { useState} from 'react';
import Shimmer from './shimmer';
import Cards from './Cards';    
import mainMenu from '../constants/Restaurants/mainMenu';
import ErrorShimmer from './errorShimmer';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Body = () => {


    const [stringSearch, setStringSearch] = useState("");
    const [checkError, setError] = useState(false);

    const {oneData, setData} = mainMenu();




    function RatingChange () {
        const showFilter = oneData.filter(value => value.info.avgRating >= 4)
        setData(showFilter);
    }

    function searchHandler (e) {
        setStringSearch(e.target.value)
    }

    function fastDelivery () {
        const fast = oneData.filter(value => value.info.sla.deliveryTime <= 30);
        setData(fast)
    }

    function searchOnClick () {
        const searchFilterData = oneData.filter(value => value.info.name.toLowerCase().includes(stringSearch.toLowerCase()));
        setData(searchFilterData)

        if (searchFilterData.length === 0) {
            setError(true)
        } else {
            setError(false)
        }
    }
    
    if (checkError === true) {
        return <ErrorShimmer/>
    }   
    
    if (oneData.length === 0) return <Shimmer/>  
    


  return (
    <div>
        <div className="body-container">
        <div className="input-section">
            <form  onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder='Search food...' value={stringSearch} onChange={searchHandler}/>
            <i className="fa-solid fa-magnifying-glass" onClick={searchOnClick}></i>
        </form>
        </div>

        <h1 className='para-1'>Restaurants with online food delivery</h1>

        <div className="toggles" tabIndex="0" >
            <p> Filter<i className="fa-solid fa-filter"></i></p>
            <p onClick={RatingChange}>Ratings 4.0+</p>
            <p onClick={fastDelivery}>Fast Delivery</p>
        </div>


        <div className="card-section">
        { 
            oneData && oneData.map((value) => (
                    <Link to={`/restaurant/${value.info.id}`} key = {value.info.id}>
                        <Cards cardInfo={value} key={value.info.id} />
                    </Link>
                ))}
            
        </div>
    </div>
        <Footer/>
    </div>
  )
}

export default Body