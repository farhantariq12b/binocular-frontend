import SideNav from '../../components/SideNav.js'
import Navbar from '../../components/Navbar.js'

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
function Merchandising() {
    return <div className= "main-wrapper">
         <div className="sidenavbar">
        <SideNav />
      </div>
      <div className="nav-size">
        <div >
            <Navbar props = {handleCallback} heading = {"Merchandising"}/> 
        </div>
      <div className="cart-row flext space-between">
        <div className="cart-half-col">
          <div className="page-headering-cart">
            <div className="cart-heading">
              <h3>Category Split</h3>
            </div>
            <div className="cart-dumy-img">
              <img src="cart-3-01.png"></img>
            </div>
          </div>
        </div>
        <div className="cart-half-col">
          <div className="page-headering-cart">
            <div className="cart-heading">
              <h3>Total Sales + Margin</h3>
            </div>
            <div className="cart-dumy-img">
              <img src="cart-3-02.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-row-3 flex space-between">
        <div className="col-49">
          <div className="full-w">
            <div className="cart-card">
            <div className="cart-half-header">
            <div className="cart-navbar-header">
              <div className="cart-heading">
                <h3>Pricing Analysis</h3>
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
            </div>
          </div>
          <div className="cart-dumy-img">
            <img src="cart-3-03.png"></img>
          </div>
            </div>
            <div className="cart-card">
            <div className="cart-navbar-header">
              <div className="cart-heading">
                <h3>Margin Analysis</h3>
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
          </div>
          <div className="flex space-between">
            <div className="col-49">
              <h1>56,5%</h1>
            </div>
            <div className="col-49">
            {/* <h3>Right said</h3> */}
            <div className="flex">
              <div className="item">
                <div className="number-box item-bg-1">
                  <p>0%<span>%</span> </p>
                  <svg width="46" height="6" viewBox="0 0 46 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="21.5" y1="6" x2="21.5" y2="2.18557e-08" stroke="#1AA594"/>
                    <line x1="24.5" y1="5" x2="24.5" y2="1" stroke="#1AA594"/>
                    <line x1="27.5" y1="5" x2="27.5" y2="1" stroke="#1AA594"/>
                    <line x1="30.5" y1="5" x2="30.5" y2="1" stroke="#CBCBCB"/>
                    <line x1="33.5" y1="5" x2="33.5" y2="1" stroke="#CBCBCB"/>
                    <line x1="36.5" y1="5" x2="36.5" y2="1" stroke="#CBCBCB"/>
                    <line x1="39.5" y1="5" x2="39.5" y2="1" stroke="#CBCBCB"/>
                    <line x1="42.5" y1="5" x2="42.5" y2="1" stroke="#CBCBCB"/>
                    <line x1="0.5" y1="5" x2="0.5" y2="1" stroke="#CBCBCB"/>
                    <line x1="3.5" y1="5" x2="3.5" y2="1" stroke="#CBCBCB"/>
                    <line x1="6.5" y1="5" x2="6.5" y2="1" stroke="#CBCBCB"/>
                    <line x1="9.5" y1="5" x2="9.5" y2="1" stroke="#CBCBCB"/>
                    <line x1="12.5" y1="5" x2="12.5" y2="1" stroke="#CBCBCB"/>
                    <line x1="15.5" y1="5" x2="15.5" y2="1" stroke="#CBCBCB"/>
                    <line x1="18.5" y1="5" x2="18.5" y2="1" stroke="#CBCBCB"/>
                    <rect x="21" y="1" width="7" height="4" fill="#1AA594" fill-opacity="0.4"/>
                  </svg>
                </div>
                <p className="year-title">Last Year</p>
              </div>
              <div className="item">
              <div className="number-box item-bg-2">
                <p>0% <span>%</span></p>
                <svg width="46" height="6" viewBox="0 0 46 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="21.5" y1="6" x2="21.5" y2="2.18557e-08" stroke="#ECB424"/>
                  <line x1="24.5" y1="5" x2="24.5" y2="1" stroke="#ECB424"/>
                  <line x1="27.5" y1="5" x2="27.5" y2="1" stroke="#CBCBCB"/>
                  <line x1="30.5" y1="5" x2="30.5" y2="1" stroke="#CBCBCB"/>
                  <line x1="33.5" y1="5" x2="33.5" y2="1" stroke="#CBCBCB"/>
                  <line x1="36.5" y1="5" x2="36.5" y2="1" stroke="#CBCBCB"/>
                  <line x1="39.5" y1="5" x2="39.5" y2="1" stroke="#CBCBCB"/>
                  <line x1="42.5" y1="5" x2="42.5" y2="1" stroke="#CBCBCB"/>
                  <line x1="0.5" y1="5" x2="0.5" y2="1" stroke="#CBCBCB"/>
                  <line x1="3.5" y1="5" x2="3.5" y2="1" stroke="#CBCBCB"/>
                  <line x1="6.5" y1="5" x2="6.5" y2="1" stroke="#CBCBCB"/>
                  <line x1="9.5" y1="5" x2="9.5" y2="1" stroke="#CBCBCB"/>
                  <line x1="12.5" y1="5" x2="12.5" y2="1" stroke="#CBCBCB"/>
                  <line x1="15.5" y1="5" x2="15.5" y2="1" stroke="#CBCBCB"/>
                  <line x1="18.5" y1="5" x2="18.5" y2="1" stroke="#CBCBCB"/>
                  <rect x="21" y="1" width="4" height="4" fill="#ECB424" fill-opacity="0.3"/>
                </svg>
              </div>
              <p className="year-title">Last month</p>
              </div>
                <div className="item">
                  <div className="number-box item-bg-3">
                    <p>0% <span>%</span></p>
                    <svg width="46" height="6" viewBox="0 0 46 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="21.5" y1="6" x2="21.5" y2="2.18557e-08" stroke="#FF5B5B"/>
                      <line x1="24.5" y1="5" x2="24.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="27.5" y1="5" x2="27.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="30.5" y1="5" x2="30.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="33.5" y1="5" x2="33.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="36.5" y1="5" x2="36.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="39.5" y1="5" x2="39.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="42.5" y1="5" x2="42.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="0.5" y1="5" x2="0.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="3.5" y1="5" x2="3.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="6.5" y1="5" x2="6.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="9.5" y1="5" x2="9.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="12.5" y1="5" x2="12.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="15.5" y1="5" x2="15.5" y2="1" stroke="#CBCBCB"/>
                      <line x1="18.5" y1="5" x2="18.5" y2="1" stroke="#FF5B5B"/>
                      <rect x="18" y="1" width="4" height="4" fill="#FF5B5B" fill-opacity="0.4"/>
                    </svg>
                  </div>
                  <p className="year-title">Last week</p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      </div>
        <div className="col-49">
          <div className="cart-card">
            <div className="cart-half-header">
            <div className="cart-navbar-header">
              <div className="cart-heading">
                <h3>Product Perfomance</h3>
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
            </div>
          </div>
            <div className="products-table">
          <div className="products-table-list">
            <table className="full-w">
              <thead>
                <tr>
                  <th className="w-20"></th>
                  <th className="w-20">
                    Category
                    <span className="arrow-move">
                      <img src="icon-arror-move.svg"></img>
                    </span>
                  </th>
                  <th className="w-20">
                    Sales $
                    <span className="arrow-move">
                      <img src="icon-arror-move.svg"></img>
                    </span>
                  </th>
                  <th className="w-20">
                    Sales Units
                    <span className="arrow-move">
                      <img src="icon-arror-move.svg"></img>
                    </span>
                  </th>
                  <th className="w-20">
                    Margin
                    <span className="arrow-move">
                      <img src="icon-arror-move.svg"></img>
                    </span>
                    </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-10">
                    <img src="Kids-Boy-Short-Sleeve 1.svg"></img>
                  </td>
                  <td className="w-30">Zander Tee Black Stripe)</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">22%</td>
                </tr>
                <tr>
                <td className="w-10">
                    <img src="Kids-Boy-Short-Sleeve 1.svg"></img>
                  </td>
                  <td className="w-30">Zander Tee Black Stripe)</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">22%</td>
                </tr>
                <tr>
                  <td className="w-10">
                    <img src="Kids-Boy-Short-Sleeve 1.svg"></img>
                  </td>
                  <td className="w-30">Zander Tee Black Stripe)</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">22%</td>
                </tr>
                <tr>
                <td className="w-10">
                    <img src="Kids-Boy-Short-Sleeve 1.svg"></img>
                  </td>
                  <td className="w-30">Zander Tee Black Stripe)</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">22%</td>
                </tr>
                <tr>
                  <td className="w-10">
                    <img src="Kids-Boy-Short-Sleeve 1.svg"></img>
                  </td>
                  <td className="w-30">Zander Tee Black Stripe)</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">22%</td>
                </tr>
                <tr>
                <td className="w-10">
                    <img src="Kids-Boy-Short-Sleeve 1.svg"></img>
                  </td>
                  <td className="w-30">Zander Tee Black Stripe)</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">22%</td>
                </tr>
                <tr>
                  <td className="w-10">
                    <img src="Kids-Boy-Short-Sleeve 1.svg"></img>
                  </td>
                  <td className="w-30">Zander Tee Black Stripe)</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">22%</td>
                </tr>
                <tr>
                <td className="w-10">
                    <img src="Kids-Boy-Short-Sleeve 1.svg"></img>
                  </td>
                  <td className="w-30">Zander Tee Black Stripe)</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">22%</td>
                </tr>
                <tr>
                <td className="w-10">
                    <img src="Kids-Boy-Short-Sleeve 1.svg"></img>
                  </td>
                  <td className="w-30">Zander Tee Black Stripe)</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">22%</td>
                </tr>
                <tr>
                <td className="w-10">
                    <img src="Kids-Boy-Short-Sleeve 1.svg"></img>
                  </td>
                  <td className="w-30">Zander Tee Black Stripe)</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">22%</td>
                </tr>
                <tr>
                <td className="w-10">
                    <img src="Kids-Boy-Short-Sleeve 1.svg"></img>
                  </td>
                  <td className="w-30">Zander Tee Black Stripe)</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">22%</td>
                </tr>
                <tr>
                <td className="w-10">
                    <img src="Kids-Boy-Short-Sleeve 1.svg"></img>
                  </td>
                  <td className="w-30">Zander Tee Black Stripe)</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">$50k</td>
                  <td className="w-20">22%</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
          </div>
        </div>
      </div>
     </div>
      </div>
 }

 export default  Merchandising