import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";   
import { Provider } from "react-redux";
import appStore from "./constants/appStore";
import Cart from "./components/Cart";
import About from "./components/About";

const App = () => {
    return (
        <div className="app-container">
            <Provider store = {appStore}>
                <Header/>
                <Outlet/>
            </Provider>
        </div>
    )
}
// react router dom provides routes to connect the pages...

const appRouter = createBrowserRouter ([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu/>
            },
            {
                path : "/cart",
                element : <Cart/>
            },
            {
                path : "/about",
                element : <About/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.querySelector(".root"))
root.render(<RouterProvider router = {appRouter} />)
