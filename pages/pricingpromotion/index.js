import SideNav from '../../components/SideNav.js'
import Navbar from '../../components/Navbar.js'
import React , {useEffect} from "react"
import Router from 'next/router'


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
function Price() {
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
   
        <div className="pricing-promotions-page full-card">
      <div className="pricing-promotions-header">
        <div className="flex space-between align-center">
          <div className="t-left">
            <div className="cart-heading">
              <h3>Pricing and Promotion 1</h3>
            </div>
          </div>
        </div>
        <div className="pricing-promotions-wrap">
          <div className="flex space-between">
            <div className="col-49">
              <div className="pricing-promotions-cart-1">
                <img src="Promotion-cart-1.png"></img>
              </div>
            </div>
            <div className="col-49">
              <div className="pricing-promotions-table">
                <table className="full-w pricing-table-main">
                  <thead>
                    <tr>
                      <th>SKU</th>
                      <th>ON HAND</th>
                      <th>DISCOUNT</th>
                      <th>orig. PRICE</th>
                      <th>NEW PRICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jogger blue L</td>
                      <td>100</td>
                      <td>
                        <ul className="flex discount-list">
                          <li>10%</li>
                          <li>20%</li>
                          <li className="discount-active">30%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="t-price-list">
                          <li>$90</li>
                          <li>Margin 55%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="new-price">
                          <li>$70</li>
                          <li>Margin 50%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Jogger blue L</td>
                      <td>100</td>
                      <td>
                        <ul className="flex discount-list">
                          <li>10%</li>
                          <li>20%</li>
                          <li className="discount-active">30%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="t-price-list">
                          <li>$90</li>
                          <li>Margin 55%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="new-price">
                          <li>$70</li>
                          <li>Margin 50%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Jogger blue L</td>
                      <td>100</td>
                      <td>
                        <ul className="flex discount-list">
                          <li>10%</li>
                          <li>20%</li>
                          <li className="discount-active">30%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="t-price-list">
                          <li>$90</li>
                          <li>Margin 55%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="new-price">
                          <li>$70</li>
                          <li>Margin 50%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Jogger blue L</td>
                      <td>100</td>
                      <td>
                        <ul className="flex discount-list">
                          <li>10%</li>
                          <li>20%</li>
                          <li className="discount-active">30%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="t-price-list">
                          <li>$90</li>
                          <li>Margin 55%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="new-price">
                          <li>$70</li>
                          <li>Margin 50%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Jogger blue L</td>
                      <td>100</td>
                      <td>
                        <ul className="flex discount-list">
                          <li>10%</li>
                          <li>20%</li>
                          <li className="discount-active">30%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="t-price-list">
                          <li>$90</li>
                          <li>Margin 55%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="new-price">
                          <li>$70</li>
                          <li>Margin 50%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Jogger blue L</td>
                      <td>100</td>
                      <td>
                        <ul className="flex discount-list">
                          <li>10%</li>
                          <li>20%</li>
                          <li className="discount-active">30%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="t-price-list">
                          <li>$90</li>
                          <li>Margin 55%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="new-price">
                          <li>$70</li>
                          <li>Margin 50%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Jogger blue L</td>
                      <td>100</td>
                      <td>
                        <ul className="flex discount-list">
                          <li>10%</li>
                          <li>20%</li>
                          <li className="discount-active">30%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="t-price-list">
                          <li>$90</li>
                          <li>Margin 55%</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="new-price">
                          <li>$70</li>
                          <li>Margin 50%</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>

                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pricing-promotions-page full-card">
      <div className="pricing-promotions-header">
        <div className="flex space-between align-center">
          <div className="t-left">
            <div className="cart-heading">
              <h3>Pricing and Promotion 1</h3>
            </div>
          </div>
        </div>
        <div className="pricing-promotions-wrap">
          <div className="flex space-between">
            <div className="col-49">
              <div className="pricing-promotions-cart-1">
                <img src="pricing-02.png"></img>
              </div>
            </div>
            <div className="col-49">
              <div className="pricing-promotions-cart-1">
                <img src="pricing-03.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="switch-section flex">
          <div className="switch-text">
            <p>Сustomer type</p>
          </div>
          <div className="b-switch-wrap">
            <label class="switch">
              <input type="checkbox"></input>
              <span class="switch-move round"></span>
            </label>
          </div>
          <div className="switch-text">
            <p>Discount amount</p>
          </div>
        </div>
      </div>
      </div>



  </div>
  </div>
}
  
  export default Price