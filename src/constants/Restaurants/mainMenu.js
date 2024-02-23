import {useState, useEffect} from "react";


const mainMenu = () => {

    const [oneData, setData] = useState([]);
    const [cloneData, setClone] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        const response = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const dataResponse = await response.json();
        setData(dataResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setClone(dataResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return {oneData, setData, cloneData};
    
}

export default mainMenu;