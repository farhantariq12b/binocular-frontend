import Chart from "react-google-charts";
import { PieChart } from 'react-minimal-pie-chart';
import SideNav from '../../components/SideNav.js'
import Navbar from '../../components/Navbar.js'
import InventoryPlaning from '../inventoryplanning/index.js'
import React from 'react';
import axios from 'axios'; 



class Executive extends React.Component{
  constructor (props) {
    super(props);
  }
  state = {
    orders: [],
    slow : 0,
    reorder : 0,
    projected : [],
    products:[],
    daterange_data:[],
    weekly: [],
    monthly:[],
    yearly:[],
    lastweekly: [],
    lastmonthly:[],
    lastyearly:[],
    /////for toggling components
    executive: false,
    inventoryP: false,
    merchandasing: false,
    price: false,
    plan: false,
    inventoryB: false
    
  }
  handleCallback = (start, end)=> {
    console.log(process.env.SERVER_URL,"process")
    
    var Difference_In_Time =end._d.getTime()- start._d.getTime() ; 
    var Difference_In_Days =Math.ceil( Difference_In_Time / (1000 * 3600 * 24)); 


    let s_date = start._d;
    let d = new Date(s_date);
    let data = "";
    for(var i=0; i<Difference_In_Days; i++ ){
      let format = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
      data = data.concat(`'${format}'${i >= Difference_In_Days - 1 ? '' : ',' }`);
      d.setDate(d.getDate() + 1);  
      
    }
    axios.get(`${process.env.SERVER_URL}/api/orders?dates=${data}`)
    .then(res => {
     const orders  = res.data;
     this.setState({ orders });
    })
    .catch(err =>{
      console.log(err)
    })
   
  }

  componentDidMount() {
    // let ss_date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    // let se_date = new Date()
    // var s_dateString = new Date(ss_date.getTime() - (ss_date.getTimezoneOffset() * 60000 ))
    //   .toISOString()
    //   .split("T")[0];
    //  let sst_date = s_dateString.split("-")
    //  let snew_start= `${sst_date[0]}-${sst_date[1]}-${sst_date[2]}`
    //   // 2020-05-31     17-2020-06
   
    //   var e_dateString = new Date(se_date.getTime() - (se_date.getTimezoneOffset() * 60000 ))
    //   .toISOString()
    //   .split("T")[0];
    //  let sen_date = e_dateString.split("-")
    //  let snew_end= `${sen_date[0]}-${sen_date[1]}-${sen_date[2]}`
  
         
    // axios.get(`http://192.168.100.29:3001/api/orders?dates=${snew_start}`)
    // .then(res => {
    //  const orders  = res.data;
    //  this.setState({ orders });
    // })
    // .catch(err =>{
    //   console.log(err)
    // })

  

    axios.get(`${process.env.SERVER_URL}/api/orders`)
    .then(res => {
      const orders = res.data;
      this.setState({ orders });
      
    })
    .catch(err =>{
      console.log(err)
    })

      axios.get(`${process.env.SERVER_URL}/api/products/slow`)
      .then(res => {
        const slow = res.data;
        this.setState({ slow });
        
      })
      .catch(err =>{
        console.log(err)
      })
      axios.get(`${process.env.SERVER_URL}/api/products/reorder`)
      .then(res => {
        const reorder = res.data;
        this.setState({ reorder });
        
      })
      .catch(err =>{
        console.log(err)
      })

      axios.get(`${process.env.SERVER_URL}/api/products/projected`)
      .then(res => {
        const projected = res.data;
        this.setState({ projected });
      })
      .catch(err =>{
        console.log(err)
      })

      axios.get(`${process.env.SERVER_URL}/api/products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
      .catch(err =>{
        console.log(err)
      })


      /////////////weekly data
     
      let s_date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      let e_date = new Date()
      var s_dateString = new Date(s_date.getTime() - (s_date.getTimezoneOffset() * 60000 ))
        .toISOString()
        .split("T")[0];
      let st_date = s_dateString.split("-")
      let new_start= `${st_date[0]}-${st_date[1]}-${st_date[2]}`
        // 2020-05-31     17-2020-06
    
        var e_dateString = new Date(e_date.getTime() - (e_date.getTimezoneOffset() * 60000 ))
        .toISOString()
        .split("T")[0];
      let en_date = e_dateString.split("-")
      let new_end= `${en_date[0]}-${en_date[1]}-${en_date[2]}`
    
          
      axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${new_start}&end_date=${new_end}`)
      .then(res => {
      const weekly = res.data;
      this.setState({ weekly });
      })
      .catch(err =>{
        console.log(err)
      })


       ///////////lastweekly////////////////

      let ls_date = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
      let le_date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      var ls_dateString = new Date(ls_date.getTime() - (ls_date.getTimezoneOffset() * 60000 ))
        .toISOString()
        .split("T")[0];
      let lst_date = ls_dateString.split("-")
      let lnew_start= `${lst_date[0]}-${lst_date[1]}-${lst_date[2]}`
        // 2020-05-31     17-2020-06
    
        var e_dateString = new Date(e_date.getTime() - (e_date.getTimezoneOffset() * 60000 ))
        .toISOString()
        .split("T")[0];
      let len_date = e_dateString.split("-")
      let lnew_end= `${len_date[0]}-${len_date[1]}-${len_date[2]}`
    
          
      axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${lnew_start}&end_date=${lnew_end}`)
      .then(res => {
      const lastweekly = res.data;
      this.setState({ lastweekly });
      })
      .catch(err =>{
        console.log(err)
      })

      ////////monthly////////////

    let ms_date = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    let me_date = new Date()
    var s_dateString = new Date(ms_date.getTime() - (ms_date.getTimezoneOffset() * 60000 ))
      .toISOString()
      .split("T")[0];
    let mst_date = s_dateString.split("-")
    let mnew_start= `${mst_date[0]}-${mst_date[1]}-${mst_date[2]}`
      // 2020-05-31     17-2020-06
  
      var me_dateString = new Date(me_date.getTime() - (me_date.getTimezoneOffset() * 60000 ))
      .toISOString()
      .split("T")[0];
    let men_date = e_dateString.split("-")
    let mnew_end= `${men_date[0]}-${men_date[1]}-${men_date[2]}`
  
        
    axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${mnew_start}&end_date=${mnew_end}`)
    .then(res => {
    const monthly = res.data;
    this.setState({ monthly });
    })
    .catch(err =>{
      console.log(err)
    })


    ////////// last monthly /
    let mls_date = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)
    let mle_date = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    var s_dateString = new Date(mls_date.getTime() - (mls_date.getTimezoneOffset() * 60000 ))
      .toISOString()
      .split("T")[0];
    let mlst_date = s_dateString.split("-")
    let mlnew_start= `${mlst_date[0]}-${mlst_date[1]}-${mlst_date[2]}`
      // 2020-05-31     17-2020-06
  
      var e_dateString = new Date(mle_date.getTime() - (mle_date.getTimezoneOffset() * 60000 ))
      .toISOString()
      .split("T")[0];
    let mlen_date = e_dateString.split("-")
    let mlnew_end= `${mlen_date[0]}-${mlen_date[1]}-${mlen_date[2]}`
  
        
    axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${mlnew_start}&end_date=${mlnew_end}`)
    .then(res => {
    const lastmonthly = res.data;
    this.setState({ lastmonthly });
    })
    .catch(err =>{
      console.log(err)
    })




    ////// yearly//////
    
  let ys_date = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
  let ye_date = new Date()
  var s_dateString =new Date(ys_date.getTime() - (ys_date.getTimezoneOffset() * 60000 ))
    .toISOString()
    .split("T")[0];
  let yst_date = s_dateString.split("-")
  let ynew_start= `${yst_date[0]}-${yst_date[1]}-${yst_date[2]}`
    // 2020-05-31     17-2020-06

    var e_dateString = new Date(ye_date.getTime() - (ye_date.getTimezoneOffset() * 60000 ))
    .toISOString()
    .split("T")[0];
  let yen_date = e_dateString.split("-")
  let ynew_end= `${yen_date[0]}-${yen_date[1]}-${yen_date[2]}`

      
  axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${ynew_start}&end_date=${ynew_end}`)
  .then(res => {
  const yearly = res.data;
  this.setState({ yearly });
  })
  .catch(err =>{
    console.log(err)
  })


    ///////last yearly/////////
    
  let lys_date =new  Date(Date.now() - 730 * 24 * 60 * 60 * 1000)
  let lye_date = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
  var s_dateString = new Date(lys_date.getTime() - (lys_date.getTimezoneOffset() * 60000 ))
    .toISOString()
    .split("T")[0];
  let lyst_date = s_dateString.split("-")
  let lynew_start= `${lyst_date[0]}-${lyst_date[1]}-${lyst_date[2]}`
    // 2020-05-31     17-2020-06

    var lye_dateString = new Date(lye_date.getTime() - (lye_date.getTimezoneOffset() * 60000 ))
    .toISOString()
    .split("T")[0];
  let lyen_date = lye_dateString.split("-")
  let lynew_end= `${lyen_date[0]}-${lyen_date[1]}-${lyen_date[2]}`

      
  axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${lynew_start}&end_date=${lynew_end}`)
  .then(res => {
  const lastyearly = res.data;
  this.setState({ lastyearly });
  })
  .catch(err =>{
    console.log(err)
  })
  }


  
  render(){
    ////////////getting data from props and declaring data/////////
    let orders =this.state.orders;
    let slow = this.state.slow;
    let reorder =this.state.reorder;
    let products = this.state.products;
    let projected = this.state.projected;
    let weekly = this.state.weekly;
    let monthly = this.state.monthly;
    let yearly = this.state.yearly;
    let lastweekly = this.state.lastweekly;
    let lastmonthly =this.state.lastmonthly;
    let lastyearly = this.state.lastyearly;
    let arrayofarrays= [];
    let data
    let order_revenue=0
    let order_quantity=0
    let units=0
    let datapie =[]


    //////function to add commas in total revenue
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  /////// creating main line chart data 
    orders.map((val)=>{  
      let arrayRevenue =[];
      arrayRevenue.push(val.create_date)
      arrayRevenue.push(val.revenue)
      arrayRevenue.push(val.quantity)
      arrayofarrays.push(arrayRevenue)
      order_revenue += val.revenue *1
      order_quantity += val.quantity *1
     
    })
      data = [
        ['date', 'Revenue','Units'],
        ["0- 0- 0",0,0],
      ]

    let dataTopass = [...data, ...arrayofarrays]     

     
    ///////////////total revenue  rounding off 2 decimal
    let totalorder_revenue = (Math.round(order_revenue * 100) / 100).toFixed(2);
    totalorder_revenue = numberWithCommas(totalorder_revenue)

      /////////////total revenuew adding////////
    let totalrevenue = 0
      products.map((val)=>{
        totalrevenue += (val.price*1) 
      })


    ///////////pie chart data////////////
      const colours =['red','green','blue','lightblue','orange','gray','tan','cream','purple','orange','lightgray', 'red','green','blue','lightblue','orange','gray','tan','cream','purple','orange','lightgray']
     
      projected.map((val , index)=>{
        let obj = {}
        obj.color = colours[index] 
        obj.title =val.product_type
        obj.value = val.percentage
        datapie.push(obj)
        units += (val.count*1)
        
      })
     
      //////////pie chart cards ///////////
      let dynamicdatapie = projected.map((val, index)=>{
        return (
          <li>
            <p style={{color:colours[index] }}>-{val.product_type} (<b>{val.percentage.toFixed(2)}%</b>)</p>
            <p className="project-dollor"><span className="project-units">- {val.count} Units</span></p>
          </li>
        )  
      })
      

      ///////////weekly comparision
        let weekrev = 0
        let weekunit = 0
        weekly.map((val)=>{
          weekrev += (val.revenue*1 )
          weekunit += (val.quantity*1 )
        })
        let lastweekrev = 0
        let lastweekunit = 0
        lastweekly.map((val)=>{
          lastweekrev += (val.revenue*1 )
          lastweekunit += (val.quantity*1 )
        })  

        let perrev  = 0
        perrev  = ((weekrev/lastweekrev)*100)
        let perunit  = 0
        perunit  = ((weekunit/lastweekunit)*100)
      

        //////////////monthly comparision
        let monthrev = 0
        let monthunit = 0
        monthly.map((val)=>{
          monthrev += (val.revenue*1 )
          monthunit += (val.quantity*1 )
        })
        let lastmonthrev = 0
        let lastmonthunit = 0
        lastmonthly.map((val)=>{
          lastmonthrev += (val.revenue*1 )
          lastmonthunit += (val.quantity*1 )
        }) 
        let mperrev  = 0
        mperrev =((monthrev/lastmonthrev)*100)
        let mperunit  = 0
        mperunit =((monthunit/lastmonthunit)*100)
        
        //////////////yearly comparision
        let yearlyrev = 0
        let yearlyunit = 0
        yearly.map((val)=>{
          yearlyrev += (val.revenue*1 )
          yearlyunit += (val.quantity*1 )
        })
        let lastyearlyrev = 0
        let lastyearlyunit = 0
        lastyearly.map((val)=>{

          lastyearlyrev += (val.revenue*1 )
          lastyearlyunit += (val.quantity*1 )
        }) 

        let yperrev  = 0
        yperrev  = ((yearlyrev/100)*lastyearlyrev)
        let yperunit  = 0
        yperunit  = ((yearlyunit/100)*lastyearlyunit)
      


  return (
  <div className = "main-wrapper">
      <div className="sidenavbar">
          <SideNav />
      </div>
      <div className="main-content">
          <Navbar props = {this.handleCallback} heading = {"Executive Summary"}/>
      
    <div className="full-card">
      <div className="flex">
        <div className="revenue-part">
          <div className="total-revenue">
            <p className="sub-title bg-light-aqua">Total Revenue</p>
            <h3 className="revenue-title">
            ${totalorder_revenue}<span>k</span> 
            </h3>
            <div className="flex">
              <div className="item">
                <div className="number-box item-bg-1">
                  <p>{yperrev}<span>%</span> </p>
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
                <p>{mperrev} <span>%</span></p>
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
                    <p>{perrev} <span>%</span></p>
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
          <div className="total-revenue">
            <p className="sub-title light-violet">Total Volume</p>
            <h3 className="revenue-title">
              {order_quantity}<span>Units</span> 
            </h3>
            <div className="flex">
              <div className="item">
                <div className="number-box item-bg-1">
                  <p>{yperunit} <span>%</span> </p>
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
                <p>{mperunit} <span>%</span></p>
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
                  <p>{perunit} <span>%</span></p>
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
        
        <div className="graphs-part">
          <div className="big-cart">


          {/* <img src="cart-big.png" alt="Cart"></img> */}


          <Chart
            width={'100%'}
            height={'300'}
            chartType="Line"
            loader={<div>Loading Chart</div>}
            data={dataTopass}
            options={{
              legend: { position: 'none', maxLines: 1 },
              chartArea: {width: '100%', height: '85%'},
              chart: {
                // title:
                //   'Average Temperatures and Daylight in Iceland Throughout the Year',
              },
              width: 900,
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
        {/* 
          <Chart

              width={'100%'}
              height={'300px'}
              chartType="Line"
              loader={<div>Loading Chart</div>}
              data={dataTopass}
              options={{
                legend: { position: 'top', maxLines: 1 },
                chartArea: {width: '100%', height: '80%'},
                width: '900',
                height:'450',
                hAxis: {
                  title: 'Date',
                  format: 'MMM dd, yyyy',
                  gridlines: {count: 7}
                },
                vAxis: {
                  title: 'Revenue',
                  gridlines: {count: 7}
                },
                series: {
                  1: { curveType: 'function' },
                },
              }}
              rootProps={{ 'data-testid': '2' }}
            /> */}
                      
          </div>
          
        </div>
      </div>
    </div>
    <div className="cart-2 flex">
    <div className="second-half-card full-card">
      <div className="flex">
        <div className="record-cart text-green">
          <p className="record-subtitle">Styles to Reorder</p>
            <h2 className="record-title">{slow.length+2}</h2>
          <button className="record-btn">Order Inventory</button>
        </div>
        <div className="record-cart text-brown">
          <p className="record-subtitle">Slow Selling Styles</p>
            <h2 className="record-title">{slow.length}</h2>
          <button className="record-btn">to discount items</button>
        </div>
      </div>
      <div className="flex">
        <div className="record-link">
          <a href="">
             On-hand inventory
             <img src="icon-link.svg"></img>
          </a>
        </div>
        <div className="record-dropdown">
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
      <div className="flex">
        <div className="point-limit">
          <div className="point-units">
            <p>Units</p>
            <h3>
              {units}
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
              $ {totalrevenue}
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
              32
              <span className="bg-light-red arrow">
                <img className="arrow-defult" src="arrow-bottom.svg"></img>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="third-half-card full-card">
      <div className="main-navbar">
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
             data={datapie}
          />
          {/* <PieChart
            animation
            animationDuration={500}
            animationEasing="ease-out"
            center={[50, 50]}
            data={datapie}
            labelPosition={50}
            lengthAclassName="sidelink"ngle={360}
            lineWidth={15}
            paddingAngle={0}
            radius={50}
            rounded
            startAngle={0}
            viewBoxSize={[100, 100]}
          /> */}

        </div>
        <div className="project-status">
          <ul>
            {dynamicdatapie}
           
          </ul>
        </div>
        <div className="project-vaule">
          <ul>
            <li>
              <div className="point-units">
                <p>Units</p>
                <h3>
                  {units}
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
                 $ {totalrevenue}
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
                  32
                  <span className="bg-light-red arrow">
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
  )}
        }
export default Executive