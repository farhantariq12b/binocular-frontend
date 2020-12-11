import React from 'react'
import Link from 'next/link'
class SideNav extends React.Component {
  constructor (props) {
    super(props);
  }
    css() {
    var x = document.getElementById("Sub");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  render(){
  return (
  <div>
    <div className="logonav">
      <div className="logo">
        <a href="/executivesummary">
          <img src="../logo.png"></img>
        </a>
      </div>
      <div className="menu">
        <a onClick={()=> {this.props.toggleSideNav()}}>
          <img src="../nav-menu.png"></img>
        </a>
      </div>
    </div>
    <div className="sidelink">
      <ul>
        <li>
        <Link href="/executivesummary">
          <button >Executive Summary</button>
        </Link>
        </li>
        <li>
        <Link href="/inventoryplanning">
          <button >Inventory Planning</button>
          </Link>
        </li>
            <button  onClick ={this.css}>Merchandising
            <ul id="Sub" className="sub-menu" >
              <li>
                <Link href="/merchandising/summer">
                <button  >Summer</button>
                </Link>
              </li>
                <li>
                  <Link href="/merchandising">
                  <button  >Autumn</button>
                  </Link>
                </li>
              </ul>
            </button>
        <li>
        <Link href="/pricingpromotion">
          <button  >Pricing and Promotions</button>
          </Link>
        </li>
        <li>
        <Link href="/planprofile">
          <button  >Plan Profile</button>
          </Link>
        </li>
        <li>
        <Link href="/inventorybuy">
          <button  >Inventory Buy</button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )}
}

export default SideNav