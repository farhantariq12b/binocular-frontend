import Chart from "react-google-charts";
import { PieChart } from 'react-minimal-pie-chart';
import Head from 'next/head';
import SideNav from '../../components/SideNav.js'
import Navbar from '../../components/Navbar.js'
import React from 'react';
import dynamic from 'next/dynamic';
import { getDataBetweenTwoDates , getInitialUnits , numberWithCommas , handleCallback }  from '../../helpers/helpers'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

class Executive extends React.Component {
  constructor(props) {
    super(props);
    if (typeof window === 'undefined') {
      global.window = {}
    }
  }
  state = {
    orders: [],
    slow: 0,
    reorder: 0,
    projected: [],
    products: [],
    daterange_data: [],
    weekly: [],
    monthly: [],
    yearly: [],
    lastweekly: [],
    lastmonthly: [],
    lastyearly: [],
    executive: false,
    inventoryP: false,
    merchandasing: false,
    price: false,
    plan: false,
    inventoryB: false
  }

  async componentDidMount() {
    this.setState({orders : await getInitialUnits() })  //initial units data
    this.setState({weekly : await getDataBetweenTwoDates( 7 , 0 ) })  //weekly data
    this.setState({lastweekly : await getDataBetweenTwoDates( 14 , 7 ) }) //lastweekly 
    this.setState({monthly : await getDataBetweenTwoDates( 30 , 0 ) })  //monthly
    this.setState({lastmonthly : await getDataBetweenTwoDates( 60 , 30 ) }) //lastmonthly
    this.setState({yearly : await getDataBetweenTwoDates( 365 , 0 ) })  //yearly
    this.setState({lastyearly : await getDataBetweenTwoDates( 730 , 365 ) })  //lastyearly
  }

  render() {
    let orders = this.state.orders;
    let slow = this.state.slow;
    let products = this.state.products;
    let weekly = this.state.weekly;
    let monthly = this.state.monthly;
    let yearly = this.state.yearly;
    let lastweekly = this.state.lastweekly;
    let lastmonthly = this.state.lastmonthly;
    let lastyearly = this.state.lastyearly;
    let arrayofarrays = [];
    let data
    let order_revenue = 0
    let order_quantity = 0
    let units = 0

    //creating main line chart data 

    orders.map((val) => {
      let arrayRevenue = [];
      arrayRevenue.push(val.create_date)
      arrayRevenue.push(val.revenue)
      arrayRevenue.push(val.quantity)
      arrayofarrays.push(arrayRevenue)
      order_revenue += val.revenue * 1
      order_quantity += val.quantity * 1
    })
    data = [
      ['date', 'Revenue', 'Units'],
      ["0- 0- 0", 0, 0],
    ]

    let dataTopass = [...data, ...arrayofarrays]

    //total revenue rounding off 2 decimal
    let totalorder_revenue = (Math.round(order_revenue * 100) / 100).toFixed(2);
    totalorder_revenue = numberWithCommas(totalorder_revenue)

    //total revenuew adding
    let totalrevenue = 0
    products.map((val) => {
      totalrevenue += (val.price * 1)
    })

    //weekly comparision
    let weekrev = 0
    let weekunit = 0
    weekly.map((val) => {
      weekrev += (val.revenue * 1)
      weekunit += (val.quantity * 1)
    })
    let lastweekrev = 0
    let lastweekunit = 0
    lastweekly.map((val) => {
      lastweekrev += (val.revenue * 1)
      lastweekunit += (val.quantity * 1)
    })

    let perrev = 0
    // perrev  = (((weekrev/lastweekrev)*100))
    let perunit = 0
    // perunit  = ((weekunit/lastweekunit)*100)

    //monthly comparision
    let monthrev = 0
    let monthunit = 0
    monthly.map((val) => {
      monthrev += (val.revenue * 1)
      monthunit += (val.quantity * 1)
    })
    let lastmonthrev = 0
    let lastmonthunit = 0
    lastmonthly.map((val) => {
      lastmonthrev += (val.revenue * 1)
      lastmonthunit += (val.quantity * 1)
    })
    let mperrev = 0
    //mperrev =((monthrev/lastmonthrev)*100)
    let mperunit = 0
    //mperunit =((monthunit/lastmonthunit)*100)

    //yearly comparision
    let yearlyrev = 0
    let yearlyunit = 0
    yearly.map((val) => {
      yearlyrev += (val.revenue * 1)
      yearlyunit += (val.quantity * 1)
    })
    let lastyearlyrev = 0
    let lastyearlyunit = 0
    lastyearly.map((val) => {
      lastyearlyrev += (val.revenue * 1)
      lastyearlyunit += (val.quantity * 1)
    })
    let yperrev = 0
    yperrev = ((yearlyrev / 100) * lastyearlyrev)
    let yperunit = 0
    yperunit = ((yearlyunit / 100) * lastyearlyunit)

    //apex chart configs
    let series = [{
      name: 'REVENUE',
      type: 'bar',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
      name: '% to PLAN',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
      name: 'FORECAST SALES',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }]
    let options = {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        title: {
          text: 'Units',
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;

          }
        }
      }
    }

    return (
      <div className="main-wrapper">
        <div className="sidenavbar">
          <SideNav />
        </div>
        <div className="main-content">
          <Navbar handleCallback={handleCallback} this={this} heading={"Executive Summary"} />
          <div className="full-card">
            <div className="flex mob">
              <div className="revenue-part">
                <div className="total-revenue">
                  <div class="mob-heading">
                    <p className="sub-title bg-light-aqua">Total Revenue</p>
                    <h3 className="revenue-title">
                      ${totalorder_revenue ? totalorder_revenue : 0}<span>k</span>
                    </h3>
                  </div>
                  <div className="flex">
                    <div className="item">
                      <div className="number-box item-bg-1">
                        <p>{yperrev ? yperrev : 0}<span>%</span> </p>
                        <svg width="46" height="6" viewBox="0 0 46 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="21.5" y1="6" x2="21.5" y2="2.18557e-08" stroke="#1AA594" />
                          <line x1="24.5" y1="5" x2="24.5" y2="1" stroke="#1AA594" />
                          <line x1="27.5" y1="5" x2="27.5" y2="1" stroke="#1AA594" />
                          <line x1="30.5" y1="5" x2="30.5" y2="1" stroke="#CBCBCB" />
                          <line x1="33.5" y1="5" x2="33.5" y2="1" stroke="#CBCBCB" />
                          <line x1="36.5" y1="5" x2="36.5" y2="1" stroke="#CBCBCB" />
                          <line x1="39.5" y1="5" x2="39.5" y2="1" stroke="#CBCBCB" />
                          <line x1="42.5" y1="5" x2="42.5" y2="1" stroke="#CBCBCB" />
                          <line x1="0.5" y1="5" x2="0.5" y2="1" stroke="#CBCBCB" />
                          <line x1="3.5" y1="5" x2="3.5" y2="1" stroke="#CBCBCB" />
                          <line x1="6.5" y1="5" x2="6.5" y2="1" stroke="#CBCBCB" />
                          <line x1="9.5" y1="5" x2="9.5" y2="1" stroke="#CBCBCB" />
                          <line x1="12.5" y1="5" x2="12.5" y2="1" stroke="#CBCBCB" />
                          <line x1="15.5" y1="5" x2="15.5" y2="1" stroke="#CBCBCB" />
                          <line x1="18.5" y1="5" x2="18.5" y2="1" stroke="#CBCBCB" />
                          <rect x="21" y="1" width="7" height="4" fill="#1AA594" fill-opacity="0.4" />
                        </svg>
                      </div>
                      <p className="year-title">Last Year</p>
                    </div>
                    <div className="item">
                      <div className="number-box item-bg-2">
                        <p>{mperrev ? mperrev : 0} <span>%</span></p>
                        <svg width="46" height="6" viewBox="0 0 46 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="21.5" y1="6" x2="21.5" y2="2.18557e-08" stroke="#ECB424" />
                          <line x1="24.5" y1="5" x2="24.5" y2="1" stroke="#ECB424" />
                          <line x1="27.5" y1="5" x2="27.5" y2="1" stroke="#CBCBCB" />
                          <line x1="30.5" y1="5" x2="30.5" y2="1" stroke="#CBCBCB" />
                          <line x1="33.5" y1="5" x2="33.5" y2="1" stroke="#CBCBCB" />
                          <line x1="36.5" y1="5" x2="36.5" y2="1" stroke="#CBCBCB" />
                          <line x1="39.5" y1="5" x2="39.5" y2="1" stroke="#CBCBCB" />
                          <line x1="42.5" y1="5" x2="42.5" y2="1" stroke="#CBCBCB" />
                          <line x1="0.5" y1="5" x2="0.5" y2="1" stroke="#CBCBCB" />
                          <line x1="3.5" y1="5" x2="3.5" y2="1" stroke="#CBCBCB" />
                          <line x1="6.5" y1="5" x2="6.5" y2="1" stroke="#CBCBCB" />
                          <line x1="9.5" y1="5" x2="9.5" y2="1" stroke="#CBCBCB" />
                          <line x1="12.5" y1="5" x2="12.5" y2="1" stroke="#CBCBCB" />
                          <line x1="15.5" y1="5" x2="15.5" y2="1" stroke="#CBCBCB" />
                          <line x1="18.5" y1="5" x2="18.5" y2="1" stroke="#CBCBCB" />
                          <rect x="21" y="1" width="4" height="4" fill="#ECB424" fill-opacity="0.3" />
                        </svg>
                      </div>
                      <p className="year-title">Last month</p>
                    </div>
                    <div className="item">
                      <div className="number-box item-bg-3">
                        <p>{perrev ? perrev : 0} <span>%</span></p>
                        <svg width="46" height="6" viewBox="0 0 46 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="21.5" y1="6" x2="21.5" y2="2.18557e-08" stroke="#FF5B5B" />
                          <line x1="24.5" y1="5" x2="24.5" y2="1" stroke="#CBCBCB" />
                          <line x1="27.5" y1="5" x2="27.5" y2="1" stroke="#CBCBCB" />
                          <line x1="30.5" y1="5" x2="30.5" y2="1" stroke="#CBCBCB" />
                          <line x1="33.5" y1="5" x2="33.5" y2="1" stroke="#CBCBCB" />
                          <line x1="36.5" y1="5" x2="36.5" y2="1" stroke="#CBCBCB" />
                          <line x1="39.5" y1="5" x2="39.5" y2="1" stroke="#CBCBCB" />
                          <line x1="42.5" y1="5" x2="42.5" y2="1" stroke="#CBCBCB" />
                          <line x1="0.5" y1="5" x2="0.5" y2="1" stroke="#CBCBCB" />
                          <line x1="3.5" y1="5" x2="3.5" y2="1" stroke="#CBCBCB" />
                          <line x1="6.5" y1="5" x2="6.5" y2="1" stroke="#CBCBCB" />
                          <line x1="9.5" y1="5" x2="9.5" y2="1" stroke="#CBCBCB" />
                          <line x1="12.5" y1="5" x2="12.5" y2="1" stroke="#CBCBCB" />
                          <line x1="15.5" y1="5" x2="15.5" y2="1" stroke="#CBCBCB" />
                          <line x1="18.5" y1="5" x2="18.5" y2="1" stroke="#FF5B5B" />
                          <rect x="18" y="1" width="4" height="4" fill="#FF5B5B" fill-opacity="0.4" />
                        </svg>
                      </div>
                      <p className="year-title">Last week</p>
                    </div>
                  </div>
                </div>
                <div className="total-revenue">
                  <div class="mob-heading">
                    <p className="sub-title light-violet">Total Volume</p>
                    <h3 className="revenue-title">
                      {order_quantity ? order_quantity : 0}<span>Units</span>
                    </h3>
                  </div>
                  <div className="flex">
                    <div className="item">
                      <div className="number-box item-bg-1">
                        <p>{yperunit ? yperunit : 0} <span>%</span> </p>
                        <svg width="46" height="6" viewBox="0 0 46 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="21.5" y1="6" x2="21.5" y2="2.18557e-08" stroke="#1AA594" />
                          <line x1="24.5" y1="5" x2="24.5" y2="1" stroke="#1AA594" />
                          <line x1="27.5" y1="5" x2="27.5" y2="1" stroke="#1AA594" />
                          <line x1="30.5" y1="5" x2="30.5" y2="1" stroke="#CBCBCB" />
                          <line x1="33.5" y1="5" x2="33.5" y2="1" stroke="#CBCBCB" />
                          <line x1="36.5" y1="5" x2="36.5" y2="1" stroke="#CBCBCB" />
                          <line x1="39.5" y1="5" x2="39.5" y2="1" stroke="#CBCBCB" />
                          <line x1="42.5" y1="5" x2="42.5" y2="1" stroke="#CBCBCB" />
                          <line x1="0.5" y1="5" x2="0.5" y2="1" stroke="#CBCBCB" />
                          <line x1="3.5" y1="5" x2="3.5" y2="1" stroke="#CBCBCB" />
                          <line x1="6.5" y1="5" x2="6.5" y2="1" stroke="#CBCBCB" />
                          <line x1="9.5" y1="5" x2="9.5" y2="1" stroke="#CBCBCB" />
                          <line x1="12.5" y1="5" x2="12.5" y2="1" stroke="#CBCBCB" />
                          <line x1="15.5" y1="5" x2="15.5" y2="1" stroke="#CBCBCB" />
                          <line x1="18.5" y1="5" x2="18.5" y2="1" stroke="#CBCBCB" />
                          <rect x="21" y="1" width="7" height="4" fill="#1AA594" fill-opacity="0.4" />
                        </svg>
                      </div>
                      <p className="year-title">Last Year</p>
                    </div>
                    <div className="item">
                      <div className="number-box item-bg-2">
                        <p>{mperunit ? mperuni : 0} <span>%</span></p>
                        <svg width="46" height="6" viewBox="0 0 46 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="21.5" y1="6" x2="21.5" y2="2.18557e-08" stroke="#ECB424" />
                          <line x1="24.5" y1="5" x2="24.5" y2="1" stroke="#ECB424" />
                          <line x1="27.5" y1="5" x2="27.5" y2="1" stroke="#CBCBCB" />
                          <line x1="30.5" y1="5" x2="30.5" y2="1" stroke="#CBCBCB" />
                          <line x1="33.5" y1="5" x2="33.5" y2="1" stroke="#CBCBCB" />
                          <line x1="36.5" y1="5" x2="36.5" y2="1" stroke="#CBCBCB" />
                          <line x1="39.5" y1="5" x2="39.5" y2="1" stroke="#CBCBCB" />
                          <line x1="42.5" y1="5" x2="42.5" y2="1" stroke="#CBCBCB" />
                          <line x1="0.5" y1="5" x2="0.5" y2="1" stroke="#CBCBCB" />
                          <line x1="3.5" y1="5" x2="3.5" y2="1" stroke="#CBCBCB" />
                          <line x1="6.5" y1="5" x2="6.5" y2="1" stroke="#CBCBCB" />
                          <line x1="9.5" y1="5" x2="9.5" y2="1" stroke="#CBCBCB" />
                          <line x1="12.5" y1="5" x2="12.5" y2="1" stroke="#CBCBCB" />
                          <line x1="15.5" y1="5" x2="15.5" y2="1" stroke="#CBCBCB" />
                          <line x1="18.5" y1="5" x2="18.5" y2="1" stroke="#CBCBCB" />
                          <rect x="21" y="1" width="4" height="4" fill="#ECB424" fill-opacity="0.3" />
                        </svg>
                      </div>
                      <p className="year-title">Last month</p>
                    </div>
                    <div className="item">
                      <div className="number-box item-bg-3">
                        <p>{perunit ? perunit : 0} <span>%</span></p>
                        <svg width="46" height="6" viewBox="0 0 46 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="21.5" y1="6" x2="21.5" y2="2.18557e-08" stroke="#FF5B5B" />
                          <line x1="24.5" y1="5" x2="24.5" y2="1" stroke="#CBCBCB" />
                          <line x1="27.5" y1="5" x2="27.5" y2="1" stroke="#CBCBCB" />
                          <line x1="30.5" y1="5" x2="30.5" y2="1" stroke="#CBCBCB" />
                          <line x1="33.5" y1="5" x2="33.5" y2="1" stroke="#CBCBCB" />
                          <line x1="36.5" y1="5" x2="36.5" y2="1" stroke="#CBCBCB" />
                          <line x1="39.5" y1="5" x2="39.5" y2="1" stroke="#CBCBCB" />
                          <line x1="42.5" y1="5" x2="42.5" y2="1" stroke="#CBCBCB" />
                          <line x1="0.5" y1="5" x2="0.5" y2="1" stroke="#CBCBCB" />
                          <line x1="3.5" y1="5" x2="3.5" y2="1" stroke="#CBCBCB" />
                          <line x1="6.5" y1="5" x2="6.5" y2="1" stroke="#CBCBCB" />
                          <line x1="9.5" y1="5" x2="9.5" y2="1" stroke="#CBCBCB" />
                          <line x1="12.5" y1="5" x2="12.5" y2="1" stroke="#CBCBCB" />
                          <line x1="15.5" y1="5" x2="15.5" y2="1" stroke="#CBCBCB" />
                          <line x1="18.5" y1="5" x2="18.5" y2="1" stroke="#FF5B5B" />
                          <rect x="18" y="1" width="4" height="4" fill="#FF5B5B" fill-opacity="0.4" />
                        </svg>
                      </div>
                      <p className="year-title">Last week</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphs-part">
                <div className="big-cart">
                  <Chart
                    width={'100%'}
                    height={'100%'}
                    className={'chart-css'}
                    chartType="Line"
                    loader={<div>Loading Chart</div>}
                    data={dataTopass}
                    options={{
                      legend: { position: 'none', maxLines: 1 },
                      chartArea: { width: '90%', height: '85%' },
                      chart: {
                        // title:
                        //   'Average Temperatures and Daylight in Iceland Throughout the Year',
                      },
                      width: '100%',
                      height: 450,
                      series: {
                        // Gives each series an axis name that matches the Y-axis below.
                        0: { axis: 'Revenue' },
                        1: { axis: 'Units' },
                      },
                      axes: {
                        // Adds labels to each axis; they don't have to match the axis names.
                        y: {
                          Revenue: { label: 'Revenue' },
                          Units: { label: 'Units' },
                        },
                      },
                    }}
                    rootProps={{ 'data-testid': '4' }}
                  />
                  {/* <ReactApexChart options={options} series={series} type="line" height={450}  /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="cart-2 flex phone">
            <div className="second-half-card full-card">
              <div className="flex">
                <div className="record-cart text-green">
                  <p className="record-subtitle">Styles to Reorder</p>
                  <h2 className="record-title">{slow.length ? slow.length + 2 : 0}</h2>
                  <button className="record-btn">Order Inventory</button>
                </div>
                <div className="record-cart text-brown">
                  <p className="record-subtitle">Slow Selling Styles</p>
                  <h2 className="record-title">{slow.length ? slow.length : 0}</h2>
                  <button className="record-btn">discount items</button>
                </div>
              </div>
              <div className="flex">
                <div className="flex-reset">
                  <div className="record-link">
                    <a href="">
                      On-hand inventory
                      <img src="icon-link.svg"></img>
                    </a>
                  </div>
                  <div className="record-dropdown w-full">
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
              <div className="flex">
                <div className="flex-reset">
                  <div className="point-limit">
                    <div className="point-units">
                      <p>Units</p>
                      <h3>
                        {units ? units : 0}
                        <span className="bg-light-cyan arrow">
                          <img className="arrow-defult" src="arrow-top.svg"></img>
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="point-limit">
                    <div className="point-units">
                      <p>VALUE</p>
                      <h3>
                        $ {totalrevenue ? totalrevenue : 0}
                        <span className="bg-light-orange arrow">
                          <img className="arrow-defult" src="arrow-top-bottom.svg"></img>
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="point-limit">
                    <div className="point-units">
                      <p>DAYS OF INV.</p>
                      <h3>
                        0<span className="bg-light-red arrow">
                          <img className="arrow-defult" src="arrow-bottom.svg"></img>
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="third-half-card full-card">
              <div className="main-navbar mob-nav">
                <div className="page-heading">
                  <h3>Category</h3>
                </div>
                <div className="navbar-content">
                  <div className="main-navbar-link">
                  </div>
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
              <div className="project-sale-section flex space-between">
                <div className="project-cart">
                  <PieChart
                    animation
                    animationDuration={500}
                    animationEasing="ease-out"
                    center={[50, 50]}
                    data={[
                      { title: 'One', value: 10, color: '#c4a5c5' },
                      { title: 'Two', value: 15, color: '#bccbdf' },
                      { title: 'Three', value: 20, color: '#d7edc1' },
                      { title: 'four', value: 10, color: '#EC98A4' },
                      { title: 'five', value: 15, color: '#a2f7e3' },
                      { title: 'six', value: 20, color: '#b1c7e4' },
                    ]}
                    labelPosition={50}
                    lengthAclassName="sidelink" ngle={360}
                    lineWidth={30}
                    paddingAngle={0}
                    radius={50}
                    rounded
                    startAngle={0}
                    viewBoxSize={[100, 100]}
                  />
                </div>
                <div className="project-status">
                </div>
                <div className="project-vaule">
                  <ul>
                    <li>
                      <div className="point-units">
                        <p>Units</p>
                        <h3>
                          {units ? units : 0}
                          <span className="bg-light-cyan arrow">
                            <img className="arrow-defult" src="arrow-top.svg"></img>
                          </span>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="point-units">
                        <p>VALUE</p>
                        <h3>
                          $ {totalrevenue ? totalrevenue : 0}
                          <span className="bg-light-orange arrow">
                            <img className="arrow-defult" src="arrow-top-bottom.svg"></img>
                          </span>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="point-units">
                        <p>DAYS OF INV.</p>
                        <h3>
                          0 <span className="bg-light-red arrow">
                            <img className="arrow-defult" src="arrow-bottom.svg"></img>
                          </span>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Executive