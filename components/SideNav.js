import React from 'react'
import Link from 'next/link'
class SideNav extends React.Component {
  constructor (props) {
    super(props);
  }
  render(){

  return <div>
    <div className="logonav">
      <div className="logo">
        <a href="#">
          <img src="logo.png"></img>
        </a>
      </div>
      <div className="menu">
        <a href="#">
          <img src="nav-menu.png"></img>
        </a>
      </div>
    </div>
    <div className="sidelink">
      <ul>
        
        <li>
        <Link href="/dashboard">
          <button >Executive Summary</button>
        </Link>
        </li>
        <li>
        <Link href="/inventoryplanning">
          <button >Inventory Planning</button>
          </Link>
        </li>
        <li>
        <Link href="#">
          <button  >Merchandising</button>
          </Link>
        </li>
        <li>
        <Link href="#">
          <button  >Pricing and Promotions</button>
          </Link>
        </li>
        <li>
        <Link href="#">
          <button  >Plan Profile</button>
          </Link>
        </li>
        <li>
        <Link href="#">
          <button  >Inventory Buy</button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
}
}

export default SideNav