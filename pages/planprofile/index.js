import SideNav from '../../components/SideNav.js'
import Navbar from '../../components/Navbar.js'

function Plan() {
    return <div className="main-wrapper">
         <div className="sidenavbar">
        <SideNav />
      </div>
      <div className="nav-size">
        <div >
            <Navbar heading = {"Plan Profile"}/> 
        </div>
   
      <div className="plan-profile-page full-card">
        <div className="plan-profile-header">
          <div className="flex space-between align-center">
            <div className="t-left">
              <div className="cart-heading">
                <h3>Pricing and Promotion</h3>
              </div>
            </div>
          </div>
          <div className="pricing-promotion-form">
            <div className="flex">
              <div className="col-3-form">
                <div className="form-label">
                  <label>Select year</label>
                </div>
                <div className="dropdown-widget">
                  <button className="dropdown-big-w c-light-black">Season (All)</button>
                  <ul className="dropdown-widget-list dropdown-w">
                    <li>Season 1</li>
                    <li>Season 2</li>
                    <li>Season 3</li>
                    <li>Season 4</li>
                  </ul>
                </div>
              </div>
              <div className="col-3-form">
                <div className="form-label">
                  <label>Select year</label>
                </div>
                <div className="f-input">
                  <input type="text" placeholder=""></input>
                </div>
              </div>
            </div>
            <div className="calendar-row">
              <div className="calendar-widget flex space-between">
                <div className="calendar-month-box bg-c-7-gray">
                  <p>JAN</p>
                  <span>$55,000</span>
                </div>
                <div className="calendar-month-box bg-c-7-gray">
                  <p>FEB</p>
                  <span>$75,000</span>
                </div>
                <div className="calendar-month-box bg-c-7-gray">
                  <p>MAR</p>
                  <span>$65,000</span>
                </div>
                <div className="calendar-month-box bg-c-7-gray">
                  <p>APR</p>
                  <span>$95,000</span>
                </div>
                <div className="calendar-month-box bg-c-7-gray">
                  <p>MAY</p>
                  <span>$55,000</span>
                </div>
                <div className="calendar-month-box bg-c-7-gray">
                  <p>JUN</p>
                  <span>$55,000</span>
                </div>
                <div className="calendar-month-box bg-c-7-gray">
                  <p>JUL</p>
                  <span>$55,000</span>
                </div>
                <div className="calendar-month-box bg-c-7-gray">
                  <p>AUG</p>
                  <span>$55,000</span>
                </div>
                <div className="calendar-month-box bg-c-7-gray">
                  <p>SEP</p>
                  <span>$55,000</span>
                </div>
                <div className="calendar-month-box bg-c-7-gray">
                  <p>OCT</p>
                  <span>$55,000</span>
                </div>
                <div className="calendar-month-box bg-c-7-gray">
                  <p>NOV</p>
                  <span>$55,000</span>
                </div>
                <div className="calendar-month-box bg-c-7-gray">
                  <p>DEC</p>
                  <span>$55,000</span>
                </div>
                <div className="calendar-month-box">
                  <p>TOTAL</p>
                  <span>$1,120,000</span>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="col-3-form">
                <div className="form-label">
                  <label>Target Margin</label>
                </div>
                <div className="f-input m-tb-input">
                  <input type="text" placeholder="%"></input>
                </div>
                <div className="form-label">
                  <label>Max Days of Inventory</label>
                </div>
                <div className="f-input m-tb-input">
                  <input type="text" placeholder="Days"></input>
                </div>
                <div className="form-label">
                  <label>Additional Information</label>
                </div>
                <div className="f-input m-tb-input">
                  <button type="text">Click to Enter</button>
                </div>
              </div>
              <div className="col-3-form">
                <div className="form-label">
                  <label>Max Inventory Levels</label>
                </div>
                <div className="f-input m-tb-input">
                  <input type="text" placeholder="$"></input>
                </div>
                <div className="form-label">
                  <label>&nbsp;</label>
                </div>
                <div className="f-input m-tb-input">
                  <input type="text" placeholder="Units"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
  </div>
  </div>
  }
  
  export default Plan