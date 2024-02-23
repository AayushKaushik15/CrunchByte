import { useEffect, useState } from "react"



const recommendMenu = (resId) => {
    
    const [showData, setData] = useState();

    useEffect(() => {
        fetchDataTwo();
    }, [])

    async function fetchDataTwo () {
        const response = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        const data = await response.json();
        setData(data);
    }

    return {showData};
}


export default recommendMenu;