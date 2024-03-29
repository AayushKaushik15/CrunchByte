import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

  // taking access to the store using selector // subscribing 
  const cart = useSelector(store => store.cart.items);

  return (
    <div className="navbar-container">
        <div className='navbar-main-logo'>
          <h2><Link to="/">CrunchByte</Link></h2>
        </div>
        <ul>
            <li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
            <li><Link to={"/cart"}><i className="fa-solid fa-cart-shopping"></i> Cart ({cart.length})</Link></li>
            <li><Link to="/about"><i className="fa-solid fa-user"></i> About</Link></li>
            <li><a href= "https://github.com/AayushKaushik15?tab=overview&from=2024-02-01&to=2024-02-24" target='_blank'><i className="fa-brands fa-github"></i> Github</a></li>
        </ul>
    </div>
  )
}

export default Header