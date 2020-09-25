
function SideNav() {
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
          <a href="#">Executive Summary</a>
        </li>
        <li>
          <a href="#">Inventory Planning</a>
        </li>
        <li>
          <a href="#">Merchandising</a>
        </li>
        <li>
          <a href="#">Pricing and Promotions</a>
        </li>
        <li>
          <a href="#">Plan Profile</a>
        </li>
        <li>
          <a href="#">Inventory Buy</a>
        </li>
      </ul>
    </div>
  </div>
}

export default SideNav