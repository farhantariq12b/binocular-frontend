import SideNav from '../../components/SideNav.js'
import Navbar from '../../components/Navbar.js'
import Chart from "react-google-charts";
import { PieChart } from 'react-minimal-pie-chart';
import Dashboard from "../dashboard/index"

function InventoryPlaning() {
    return (
      <Dashboard heading={"Inventory Plan"}>
      <div className="cart-row">
      
        <div className="cart-half-col">
       
          <div className="cart-half-header">
         
          <div className="cart-navbar-header">
        
              <div className="cart-heading">
                <h3>By Subcategory</h3>
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
          <div className="rivew-unnites">
            <div className="flex space-between">
              <div className="review-unit-btn">
                <span>200k</span>
                <button>Revenue</button>
              </div>
              <div className="review-unit-btn">
                <button>UNITS</button>
                <span>1000</span>
              </div>
            </div>
          </div>
          <div className="cart-image">
            {/* <img src="page-2-01.png"></img> */}
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350],
                ]}
                options={{
                    height:'450',
                    // Material design options
                    // chart: {
                    // title: 'Company Performance',
                    // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                    // },
                    isStacked: true,
                    legend: { position: 'bottom', maxLines: 1 },
                    vAxis: {minValue: 0}
                }}
              
                // For tests
                rootProps={{ 'data-testid': '2' }}
                />
          </div>
          <div className="colr-text-list">
            <ul>
              <li>
                <div className="b-widget1">
                  <span className="b-widget1-bullet bg-c-info"></span>
                  <span className="b-widget1-text">
                    <span className="b-widget1-text-sub c-info">Swimwear  </span>
                  </span>
                </div>
              </li>
              <li>
                <div className="b-widget1">
                  <span className="b-widget1-bullet bg-c-primary"></span>
                  <span className="b-widget1-text">
                    <span className="b-widget1-text-sub c-primary">Tops </span>
                  </span>
                </div>
              </li>
              <li>
                <div className="b-widget1">
                  <span className="b-widget1-bullet bg-c-solid-accent"></span>
                  <span className="b-widget1-text">
                    <span className="b-widget1-text-sub c-solid-accent">Outerwear  </span>
                  </span>
                </div>
              </li>
              <li>
                <div className="b-widget1">
                  <span className="b-widget1-bullet bg-c-danger"></span>
                  <span className="b-widget1-text">
                    <span className="b-widget1-text-sub c-danger">Bottoms </span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="cart-half-col">
          <div className="cart-half-header">
            <div className="cart-navbar-header">
              <div className="cart-heading">
                <h3>Inventory Needs</h3>
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
          <div className="cart-image">
            {/* <img src="page-2-02.png"></img> */}
            <Chart

              width={'100%'}
              height={'300px'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['x', 'dogs','cats'],
                [0, 0 , 39],
                [1, 10, 7],
                [2, 23, 1],
                [3, 17, 3],
                [4, 18, 34],
                [5, 9, 31],
                [6, 11, 34],
                [7, 27, 29],
                [8, 33, 59],
                [9, 40, 9],
                [10, 32, 29],
                [11, 35, 32],
              ]}
              options={{
                legend: { position: 'none', maxLines: 1 },
                chartArea: {width: '90%', height: '85%'},
                width: '1%',
                height:'450',
                hAxis: {
                  // title: 'Date',
                  // format: 'MMM dd, yyyy',
                  gridlines: {count: 7}
                },
                vAxis: {
                  title: 'Revenue',
                  gridlines: {count: 7}
                },
                // series: {
                //   1: { curveType: 'function' },
                // },
                lineWidth: 2,
                series: {0: {type: 'line',lineDashStyle: [8, 8]}}
              }}
              rootProps={{ 'data-testid': '2' }}
              />
          </div>
          <div className="inventory-tabel">
            <table className="inventory-tabel-main">
              <thead>
                <tr>
                  <th></th>
                  <th>JAN</th>
                  <th>FEB</th>
                  <th>MAR</th>
                  <th>APR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="line-table bg-c-danger"></span>
                    Tanks - Trend
                    </td>
                  <td>5k</td>
                  <td>6k</td>
                  <td>7k</td>
                  <td>8k</td>
                </tr>
                <tr>
                  <td>
                  <span className="line-table bg-c-info"></span>
                    Tanks - Budget</td>
                  <td>4k</td>
                  <td>5k</td>
                  <td>6k</td>
                  <td>6k</td>
                </tr>
                <tr>
                  <td>
                  <span className="line-table bg-c-danger"></span>
                    T-Shirts SS - Trend
                  </td>
                  <td>3k</td>
                  <td>4k</td>
                  <td>5k</td>
                  <td>6k</td>
                </tr>
                <tr>
                  <td>
                  <span className="line-table bg-c-info"></span>
                    T-Shirts SS - Budget
                  </td>
                  <td>2.5k</td>
                  <td>3.5k</td>
                  <td>4.5k</td>
                  <td>5.5k</td>
                </tr>
                <tr>
                  <td>
                  <span className="line-table bg-c-primary"></span>
                    T-Shirts LS - Trend
                    </td>
                  <td>1.5k</td>
                  <td>2.5k</td>
                  <td>3.5k</td>
                  <td>4.5k</td>
                </tr>
                
              </tbody>
            </table>
  
          </div>
        </div>
      </div>
  
      <div className="cart-row">
        <div className="cart-half-col">
          <div className="cart-half-header">
          <div className="cart-navbar-header">
            <div className="cart-heading">
              <h3>At-Risk Styles
              <span className="info-img">
                <img src="info.svg"></img>
              </span>
              </h3>
            </div>
          </div>
          <div className="risk-tabel">
            <table className="inventory-tabel-main">
              <thead>
                <tr>
                  <th>Style Description</th>
                  <th>Weeks of Inv Remaining</th>
                  <th>weeks left in selling season</th>
                  <th>Inventory Needed</th>
                  <th>Potential Revenue</th>
                  <th>Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Road Jogger (Spiral Tie-Dye)</td>
                  <td>1</td>
                  <td>2</td>
                  <td>25</td>
                  <td>$8k</td>
                  <td>$2,4k</td>
                </tr>
                <tr>
                  <td>Road Jogger (Spiral Tie-Dye)</td>
                  <td>1</td>
                  <td>2</td>
                  <td>25</td>
                  <td>$8k</td>
                  <td>$2,4k</td>
                </tr>
                <tr>
                  <td>Road Jogger (Spiral Tie-Dye)</td>
                  <td>1</td>
                  <td>2</td>
                  <td>25</td>
                  <td>$8k</td>
                  <td>$2,4k</td>
                </tr>
                <tr>
                  <td>Road Jogger (Spiral Tie-Dye)</td>
                  <td>1</td>
                  <td>2</td>
                  <td>25</td>
                  <td>$8k</td>
                  <td>$2,4k</td>
                </tr>
                
              </tbody>
            </table>
            <div className="see-all-btn">
              <button>Sell All</button>
            </div>
          </div>
          <div className="cart-navbar-header">
            <div className="cart-heading">
              <h3>At-Risk SKUs
                <span className="info-img">
                  <img src="info.svg"></img>
                </span>
                
              </h3>
            </div>
          </div>
          <div className="risk-tabel">
            <table className="inventory-tabel-main">
              <thead>
                <tr>
                  <th>Style Description</th>
                  <th>Weeks of Inv Remaining</th>
                  <th>weeks left in selling season</th>
                  <th>Inventory Needed</th>
                  <th>Potential Revenue</th>
                  <th>Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Road Jogger (Spiral Tie-Dye)</td>
                  <td>1</td>
                  <td>2</td>
                  <td>25</td>
                  <td>$8k</td>
                  <td>$2,4k</td>
                </tr>
                <tr>
                  <td>Road Jogger (Spiral Tie-Dye)</td>
                  <td>1</td>
                  <td>2</td>
                  <td>25</td>
                  <td>$8k</td>
                  <td>$2,4k</td>
                </tr>
                <tr>
                  <td>Road Jogger (Spiral Tie-Dye)</td>
                  <td>1</td>
                  <td>2</td>
                  <td>25</td>
                  <td>$8k</td>
                  <td>$2,4k</td>
                </tr>
                <tr>
                  <td>Road Jogger (Spiral Tie-Dye)</td>
                  <td>1</td>
                  <td>2</td>
                  <td>25</td>
                  <td>$8k</td>
                  <td>$2,4k</td>
                </tr>
                
              </tbody>
            </table>
            <div className="see-all-btn">
              <button>Sell All</button>
            </div>
          </div>
        </div>
      </div>
        <div className="cart-half-col">
          <div className="cart-half-header">
            <div className="cart-navbar-header">
              <div className="cart-heading">
                <h3>Sales Analysis</h3>
              </div>
              {/* <div className="main-navbar-dropdown">
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
              </div> */}
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
            <div className="sales-analysis-section flex space-between">
              <div className="sales-analysis-cart col-49">
                <div className="analysis-cart-img">
                  {/* <img src="cart-2-03.png"></img> */}
                    <PieChart
                        animation
                        animationDuration={500}
                        animationEasing="ease-out"
                        center={[50, 50]}
                        data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#2A7BE5' },
                            { title: 'Three', value: 20, color: '#98DE52' },
                            { title: 'four', value: 10, color: '#EC98A4' },
                            { title: 'five', value: 15, color: '#06F2CA' },
                            { title: 'six', value: 20, color: '#27548C' },
                            { title: 'eight', value: 10, color: '#E38627' },
                            { title: 'none', value: 15, color: '#C7522D' },
                            { title: 'zero', value: 20, color: '#6A2135' },
                          ]}
                        labelPosition={50}
                        lengthAclassName="sidelink"ngle={360}
                        lineWidth={25}
                        paddingAngle={0}
                        radius={50}
                        rounded
                        startAngle={0}
                        viewBoxSize={[100, 100]}
                    />
                </div>
              </div>
              <div className="sales-analysis-details col-49">
                <div className="avrage-amount">
                  <div className="b-widget1">
                    <span className="b-widget1-text flex space-between">
                      <span className="b-widget1-text-sub c-primary">
                      <span className="b-widget1-bullet bg-c-primary"></span>
                        New Seasons 
                      </span>
                      <span className="b-widget1-text-sub c-primary">$6M</span>
                      <span className="b-widget1-text-sub c-primary">62% </span> 
                    </span>
                  </div>
                  <div className="b-widget1">
                    <span className="b-widget1-text flex space-between">
                      <span className="b-widget1-text-sub c-danger">
                        <span className="b-widget1-bullet bg-c-danger"></span>
                        New Seasons
                      </span>
                      <span className="b-widget1-text-sub c-danger">$6M</span>
                      <span className="b-widget1-text-sub c-danger">62% </span> 
                    </span>
                  </div>
                </div>
                <div className="analysis-tow-section">
                  <div className="b-widget2-line flex space-between">
                    <span><span className="b-widget2-bar"></span> Core </span>
                    <span>$800k</span>
                    <span>10%</span>
                  </div>
                  <div className="b-widget2-line flex space-between">
                    <span><span className="b-widget2-bar"></span> Core </span>
                    <span>$800k</span>
                    <span>10%</span>
                  </div>
                  <div className="b-widget2-line flex space-between">
                    <span><span className="b-widget2-bar"></span> Core </span>
                    <span>$800k</span>
                    <span>10%</span>
                  </div>
                </div>
                <div className="analysis-unit-sec">
                <div className="b-widget1">
                  <span className="b-widget1-text flex space-between">
                    <span className="b-widget1-text-sub c-primary">
                      <span className="b-widget1-bullet bg-c-primary"></span>
                      New Seasons
                    </span>
                    <span className="b-widget1-text-sub c-primary">$6M</span>
                    <span className="b-widget1-text-sub c-primary">62% </span> 
                  </span>
                </div>
                <div className="b-widget1">
                    <span className="b-widget1-text flex space-between">
                      <span className="b-widget1-text-sub c-danger">
                        <span className="b-widget1-bullet bg-c-danger"></span>
                        New Seasons
                      </span>
                      <span className="b-widget1-text-sub c-danger">$6M</span>
                      <span className="b-widget1-text-sub c-danger">62% </span> 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="full-card">
        <div className="wrap-2 flex space-between">
          <div className="col-49">
            <div className="cart-heading">
              <h3>Size Break Analysis</h3>
            </div>
          </div>
          <div className="col-49">
          <div className="data-search-tabel flex space-between align-center">
            <div className="item-search w-32">
              <div className="search-part">
                <input type="text" placeholder="Search by SKU"></input>
                <img className="search-icon-img" src="icon-search.svg"></img>
              </div>
            </div>
           
          </div>
          <div className="item-dropdown w-32">
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
        <div className="flex space-between">
          <div className="col-49">
            <div className="report-table-heading">
              <h3>SUMMER 2020</h3>
            </div>
            <div className="report-table">
            <table className="inventory-tabel-main">
                <thead>
                  <tr>
                    <th>CateGory</th>
                    <th>XS</th>
                    <th>S</th>
                    <th>M</th>
                    <th>L</th>
                    <th>XL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>T - Shirts</td>
                    <td>25%</td>
                    <td>35%</td>
                    <td>22%</td>
                    <td>10%</td>
                    <td>8%</td>
                  </tr>
                  <tr>
                  <td>T - Shirts</td>
                    <td>25%</td>
                    <td>35%</td>
                    <td>22%</td>
                    <td>10%</td>
                    <td>8%</td>
                  </tr>
                  <tr>
                  <td>T - Shirts</td>
                    <td>25%</td>
                    <td>35%</td>
                    <td>22%</td>
                    <td>10%</td>
                    <td>8%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-49">
          <div className="report-table-heading">
            <h3>HISTORICAL</h3>
          </div>
          <div className="report-table">
          <table className="inventory-tabel-main">
              <thead>
                <tr>
                  <th>CateGory</th>
                  <th>XS</th>
                  <th>S</th>
                  <th>M</th>
                  <th>L</th>
                  <th>XL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>T - Shirts</td>
                  <td>25%</td>
                  <td>35%</td>
                  <td>22%</td>
                  <td>10%</td>
                  <td>8%</td>
                </tr>
                <tr>
                <td>T - Shirts</td>
                  <td>25%</td>
                  <td>35%</td>
                  <td>22%</td>
                  <td>10%</td>
                  <td>8%</td>
                </tr>
                <tr>
                <td>T - Shirts</td>
                  <td>25%</td>
                  <td>35%</td>
                  <td>22%</td>
                  <td>10%</td>
                  <td>8%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
    </div>
    </Dashboard>
    )}
  
  export default InventoryPlaning