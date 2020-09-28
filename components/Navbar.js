import MyComponent from "./datepicker"
import React from "react"
class Navbar extends React.Component {
  constructor (props) {
    super(props);
  }
 
  render(){
  return <div>
    <div className="main-navbar">
      <div className="page-heading">
      <h3>{this.props.heading}</h3>
      </div>
      <div className="navbar-content">
      <div className="main-navbar-dropdown">
          <div className="dropdown-items">
            <button className="dropdown-btn1" type="text">Division (All)</button>
            <ul className="dropdown-list">
              <li>
                <a href="#">dropdown-item</a>
              </li>
              <li>
                <a href="#">dropdown-item 01</a>
              </li>
              <li>
                <a href="#">dropdown-item 03</a>
              </li>
              <li>
                <a href="#">dropdown 04</a>
              </li>
            </ul>
          </div>  {/* <ul>
            <li>
              <a href="#">Week</a>
            </li>
            <li>
              <a href="#">Month</a>
            </li>
            <li>
              <a href="#">Year</a>
            </li>
            <li>
              <a href="#">Custom</a>
            </li>
          </ul> */}
        </div>
        <div className="main-navbar-link">
          <MyComponent callbackhandle={this.props.props}/>
        </div>
        <div className="main-navbar-dropdown">
          <div className="dropdown-items">
            <button className="dropdown-btn1" type="text">Division (All)</button>
            <ul className="dropdown-list">
              <li>
                <a href="#">dropdown-item</a>
              </li>
              <li>
                <a href="#">dropdown-item 01</a>
              </li>
              <li>
                <a href="#">dropdown-item 03</a>
              </li>
              <li>
                <a href="#">dropdown 04</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-social">
        <ul>
          <li>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill="#7E7E7E"/>
              <path d="M19.7619 18.6122L15.1006 13.951C14.783 13.6333 14.2686 13.6333 13.951 13.951C13.6334 14.2683 13.6334 14.7832 13.951 15.1006L18.6123 19.7618C18.771 19.9206 18.9789 20 19.1871 20C19.3949 20 19.603 19.9206 19.7619 19.7618C20.0795 19.4445 20.0795 18.9296 19.7619 18.6122Z" fill="#7E7E7E"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </li>
          <li>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.62088 21C7.64052 21 6.02979 19.3893 6.02979 17.4089C6.02979 17.0124 6.35155 16.6907 6.748 16.6907C7.14446 16.6907 7.46622 17.0124 7.46622 17.4089C7.46622 18.5974 8.43238 19.5636 9.62088 19.5636C10.8092 19.5636 11.7755 18.5974 11.7755 17.4089C11.7755 17.0124 12.0973 16.6907 12.4938 16.6907C12.8902 16.6907 13.212 17.0124 13.212 17.4089C13.212 19.3893 11.6012 21 9.62088 21Z" fill="#7E7E7E"/>
              <path d="M17.5212 18.1271H1.72039C0.796144 18.1271 0.0444336 17.3754 0.0444336 16.4513C0.0444336 15.9609 0.258006 15.4966 0.630617 15.1776C2.08704 13.947 2.91731 12.1583 2.91731 10.2632V7.59318C2.91731 3.89688 5.92433 0.889862 9.6208 0.889862C13.3171 0.889862 16.3241 3.89688 16.3241 7.59318V10.2632C16.3241 12.1583 17.1544 13.947 18.6013 15.171C18.9834 15.4966 19.197 15.9609 19.197 16.4513C19.197 17.3754 18.4453 18.1271 17.5212 18.1271ZM9.6208 2.3263C6.71619 2.3263 4.35375 4.68874 4.35375 7.59318V10.2632C4.35375 12.5814 3.33779 14.7706 1.56714 16.2674C1.53365 16.2962 1.48087 16.3556 1.48087 16.4513C1.48087 16.5814 1.59011 16.6907 1.72039 16.6907H17.5212C17.6513 16.6907 17.7606 16.5814 17.7606 16.4513C17.7606 16.3556 17.708 16.2962 17.6762 16.2693C15.9036 14.7706 14.8877 12.5814 14.8877 10.2632V7.59318C14.8877 4.68874 12.5252 2.3263 9.6208 2.3263Z" fill="#7E7E7E"/>
            </svg>
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0711 12.9289C15.9819 11.8398 14.6855 11.0335 13.2711 10.5454C14.786 9.50199 15.7812 7.75578 15.7812 5.78125C15.7812 2.59348 13.1878 0 10 0C6.81223 0 4.21875 2.59348 4.21875 5.78125C4.21875 7.75578 5.21402 9.50199 6.72898 10.5454C5.31453 11.0335 4.01813 11.8398 2.92895 12.9289C1.0402 14.8177 0 17.3289 0 20H1.5625C1.5625 15.3475 5.34754 11.5625 10 11.5625C14.6525 11.5625 18.4375 15.3475 18.4375 20H20C20 17.3289 18.9598 14.8177 17.0711 12.9289ZM10 10C7.67379 10 5.78125 8.1075 5.78125 5.78125C5.78125 3.455 7.67379 1.5625 10 1.5625C12.3262 1.5625 14.2188 3.455 14.2188 5.78125C14.2188 8.1075 12.3262 10 10 10Z" fill="#7E7E7E"/>
            </svg>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
  }
}

export default Navbar