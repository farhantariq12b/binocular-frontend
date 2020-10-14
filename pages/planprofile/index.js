import SideNav from '../../components/SideNav.js'
import Navbar from '../../components/Navbar.js'
import React , {useEffect} from "react"
import Router from 'next/router'

//callback for datepicker


const handleCallback = (start, end)=> {
    // console.log(process.env.SERVER_URL,"process")
    
    // var Difference_In_Time =end._d.getTime()- start._d.getTime() ; 
    // var Difference_In_Days =Math.ceil( Difference_In_Time / (1000 * 3600 * 24)); 
  
  
    // let s_date = start._d;
    // let d = new Date(s_date);
    // let data = "";
    // for(var i=0; i<Difference_In_Days; i++ ){
    //   let format = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    //   data = data.concat(`'${format}'${i >= Difference_In_Days - 1 ? '' : ',' }`);
    //   d.setDate(d.getDate() + 1);  
      
    // }
    // axios.get(`${process.env.SERVER_URL}/api/orders?dates=${data}`)
    // .then(res => {
    //  const orders  = res.data;
    //  this.setState({ orders });
    // })
    // .catch(err =>{
    //   console.log(err)
    // })
   
  }
function Plan() {
  useEffect(() => { 
    const jwt_token = localStorage.getItem("authToken");
    if (!jwt_token) {
      Router.push('/authentication/signin')
    } 
  }
  , []);
    return <div className="main-wrapper">
         <div className="sidenavbar">
        <SideNav />
      </div>
      <div className="nav-size">
        <div >
            <Navbar props = {handleCallback} heading = {"Plan Profile"}/> 
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