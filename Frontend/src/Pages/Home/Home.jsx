import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className="dashboard">
        <div className="sidebar">
            <h1>ITMS</h1>
            <ul className='Menu'>
                <li className="menu-li" id="Dashboard"> Dashboard </li>
                <li className="menu-li"> Inventory </li>
                <li className="menu-li"> Sales</li>
                <li className="menu-li"> Purchases </li>
                <li className="menu-li"> Integrations </li>
                <li className="menu-li"> Active Channels</li>
                <li className="menu-li"> Reports </li>
                <li className="menu-li"> Documents </li>
                <li className="menu-li" id="logout"> LOGOUT</li>
            </ul>
        </div>
        <div className="main-content">
            <div className="navbar">
                <input id="search-bar"type="text" placeholder='search' />
            </div>
            <div className="Body-content">
                <div className="sales-activity">
                    <h2>Sales Activity</h2>
                    <div className="sales-info">
                    <p >To be Packed</p>
                    <p >To be Shipped</p>
                    <p >To be Delivered</p>
                    <p >To be Invoiced</p>
                    </div>
                </div>
                <div className="Inventory-summary">
                    <h2>Inventory Summary</h2>
                    <p className='Quantity'>Quantity in Hand</p>
                    <p classname="Quantity">Quantity to be received</p>
                </div>
            </div>
            <div className="containers">
                <div className="container">
                    <h2>Product Details</h2>
                    <ul>
                        <li>Low Stock Items</li>
                        <li>At Item group</li>
                        <li>All items</li>
                        <li>Unconfirmed items</li>
                    </ul>
                </div>
                <div className="container">
                    <h2>Top selling Items</h2>
                    <p id="previous-year">previous year</p>
                    <div className="container-items">
                        <h3>171pcs</h3>
                        <h3>45sets</h3>
                        <h3>33 sets</h3>
                    </div>
                    

                </div>
                <div className="container">
                    <h2>Purchase Order</h2>
                    <div className="quantity-ordered">
                        <h4>Quantity-ordered</h4>
                    </div>
                </div>
                <div className="container">
                    <h2>Sales order</h2>
                    <div className="headline">
                        <p>channel</p>
                        <p>Draft</p>
                        <p>confirmed</p> 
                        <p>packed</p>
                        <p>shipped</p>   
                            
                    </div>
                </div>
            </div>
            <div className='footer' >
                <ul className="footer-para">
                <li>access options</li>
                <li>Audio description</li>
                <li>helpcenter</li>
                <li>giftcard</li>
                <li>mediacenter</li>
                <li>jobs</li>
                <li>terms of use </li>
                <li>policy</li>
                </ul>
                
            </div>
        </div>
        

      </div>
    </div>
  )
}

export default Home
