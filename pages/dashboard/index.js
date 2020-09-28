// import SideNav from '../../components/SideNav.js'
// import Navbar from '../../components/Navbar.js'
// import Executive from '../executivesummary/index.js'
// import InventoryPlaning from '../inventoryplanning/index.js'
// import React from 'react';
// import axios from 'axios';
// import {connect} from 'react-redux';
// import {setOrders} from '../../redux/actions/main'  

// class Dashboard extends React.Component {
//   constructor (props) {
//     super(props);
//   }
//   state = {
//     orders: [],
//     slow : 0,
//     reorder : 0,
//     projected : [],
//     products:[],
//     daterange_data:[],
//     weekly: [],
//     monthly:[],
//     yearly:[],
//     lastweekly: [],
//     lastmonthly:[],
//     lastyearly:[],
//     /////for toggling components
//     executive: false,
//     inventoryP: false,
//     merchandasing: false,
//     price: false,
//     plan: false,
//     inventoryB: false
    
//   }
//   //callback for datepicker
//   handleCallback = (start, end)=> {
//     console.log(process.env.SERVER_URL,"process")
    
//     var Difference_In_Time =end._d.getTime()- start._d.getTime() ; 
//     var Difference_In_Days =Math.ceil( Difference_In_Time / (1000 * 3600 * 24)); 


//     let s_date = start._d;
//     let d = new Date(s_date);
//     let data = "";
//     for(var i=0; i<Difference_In_Days; i++ ){
//       let format = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
//       data = data.concat(`'${format}'${i >= Difference_In_Days - 1 ? '' : ',' }`);
//       d.setDate(d.getDate() + 1);  
      
//     }
//     axios.get(`${process.env.SERVER_URL}/api/orders?dates=${data}`)
//     .then(res => {
//      const orders  = res.data;
//      this.setState({ orders });
//     })
//     .catch(err =>{
//       console.log(err)
//     })
   
//   }
//   toggleExecutive(){
//     this.setState({executive:!this.state.executive})
//   }
//   toggleInventoryP(){
//     this.setState({inventoryP:!this.state.inventoryP})
//   }
//   toggleMerchandasing(){
//     this.setState({merchandasing:!this.state.merchandasing})
//   }
//   togglePrice(){
//     this.setState({price:!this.state.price})
//   }
//   toggleplan(){
//     this.setState({plan:!this.state.plan})
//   }
//   toggleInventoryB(){
//     this.setState({inventoryB:!this.state.inventoryB})
//   }

//   componentDidMount() {
//     // let ss_date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
//     // let se_date = new Date()
//     // var s_dateString = new Date(ss_date.getTime() - (ss_date.getTimezoneOffset() * 60000 ))
//     //   .toISOString()
//     //   .split("T")[0];
//     //  let sst_date = s_dateString.split("-")
//     //  let snew_start= `${sst_date[0]}-${sst_date[1]}-${sst_date[2]}`
//     //   // 2020-05-31     17-2020-06
   
//     //   var e_dateString = new Date(se_date.getTime() - (se_date.getTimezoneOffset() * 60000 ))
//     //   .toISOString()
//     //   .split("T")[0];
//     //  let sen_date = e_dateString.split("-")
//     //  let snew_end= `${sen_date[0]}-${sen_date[1]}-${sen_date[2]}`
  
         
//     // axios.get(`http://192.168.100.29:3001/api/orders?dates=${snew_start}`)
//     // .then(res => {
//     //  const orders  = res.data;
//     //  this.setState({ orders });
//     // })
//     // .catch(err =>{
//     //   console.log(err)
//     // })

  

//     axios.get(`${process.env.SERVER_URL}/api/orders`)
//     .then(res => {
//       const orders = res.data;
//       this.setState({ orders });
      
//     })
//     .catch(err =>{
//       console.log(err)
//     })

//       axios.get(`${process.env.SERVER_URL}/api/products/slow`)
//       .then(res => {
//         const slow = res.data;
//         this.setState({ slow });
        
//       })
//       .catch(err =>{
//         console.log(err)
//       })
//       axios.get(`${process.env.SERVER_URL}/api/products/reorder`)
//       .then(res => {
//         const reorder = res.data;
//         this.setState({ reorder });
        
//       })
//       .catch(err =>{
//         console.log(err)
//       })

//       axios.get(`${process.env.SERVER_URL}/api/products/projected`)
//       .then(res => {
//         const projected = res.data;
//         this.setState({ projected });
//       })
//       .catch(err =>{
//         console.log(err)
//       })

//       axios.get(`${process.env.SERVER_URL}/api/products`)
//       .then(res => {
//         const products = res.data;
//         this.setState({ products });
//       })
//       .catch(err =>{
//         console.log(err)
//       })


//       /////////////weekly data
     
//       let s_date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
//       let e_date = new Date()
//       var s_dateString = new Date(s_date.getTime() - (s_date.getTimezoneOffset() * 60000 ))
//         .toISOString()
//         .split("T")[0];
//       let st_date = s_dateString.split("-")
//       let new_start= `${st_date[0]}-${st_date[1]}-${st_date[2]}`
//         // 2020-05-31     17-2020-06
    
//         var e_dateString = new Date(e_date.getTime() - (e_date.getTimezoneOffset() * 60000 ))
//         .toISOString()
//         .split("T")[0];
//       let en_date = e_dateString.split("-")
//       let new_end= `${en_date[0]}-${en_date[1]}-${en_date[2]}`
    
          
//       axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${new_start}&end_date=${new_end}`)
//       .then(res => {
//       const weekly = res.data;
//       this.setState({ weekly });
//       })
//       .catch(err =>{
//         console.log(err)
//       })


//        ///////////lastweekly////////////////

//       let ls_date = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
//       let le_date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
//       var ls_dateString = new Date(ls_date.getTime() - (ls_date.getTimezoneOffset() * 60000 ))
//         .toISOString()
//         .split("T")[0];
//       let lst_date = ls_dateString.split("-")
//       let lnew_start= `${lst_date[0]}-${lst_date[1]}-${lst_date[2]}`
//         // 2020-05-31     17-2020-06
    
//         var e_dateString = new Date(e_date.getTime() - (e_date.getTimezoneOffset() * 60000 ))
//         .toISOString()
//         .split("T")[0];
//       let len_date = e_dateString.split("-")
//       let lnew_end= `${len_date[0]}-${len_date[1]}-${len_date[2]}`
    
          
//       axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${lnew_start}&end_date=${lnew_end}`)
//       .then(res => {
//       const lastweekly = res.data;
//       this.setState({ lastweekly });
//       })
//       .catch(err =>{
//         console.log(err)
//       })

//       ////////monthly////////////

//     let ms_date = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
//     let me_date = new Date()
//     var s_dateString = new Date(ms_date.getTime() - (ms_date.getTimezoneOffset() * 60000 ))
//       .toISOString()
//       .split("T")[0];
//     let mst_date = s_dateString.split("-")
//     let mnew_start= `${mst_date[0]}-${mst_date[1]}-${mst_date[2]}`
//       // 2020-05-31     17-2020-06
  
//       var me_dateString = new Date(me_date.getTime() - (me_date.getTimezoneOffset() * 60000 ))
//       .toISOString()
//       .split("T")[0];
//     let men_date = e_dateString.split("-")
//     let mnew_end= `${men_date[0]}-${men_date[1]}-${men_date[2]}`
  
        
//     axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${mnew_start}&end_date=${mnew_end}`)
//     .then(res => {
//     const monthly = res.data;
//     this.setState({ monthly });
//     })
//     .catch(err =>{
//       console.log(err)
//     })


//     ////////// last monthly /
//     let mls_date = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)
//     let mle_date = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
//     var s_dateString = new Date(mls_date.getTime() - (mls_date.getTimezoneOffset() * 60000 ))
//       .toISOString()
//       .split("T")[0];
//     let mlst_date = s_dateString.split("-")
//     let mlnew_start= `${mlst_date[0]}-${mlst_date[1]}-${mlst_date[2]}`
//       // 2020-05-31     17-2020-06
  
//       var e_dateString = new Date(mle_date.getTime() - (mle_date.getTimezoneOffset() * 60000 ))
//       .toISOString()
//       .split("T")[0];
//     let mlen_date = e_dateString.split("-")
//     let mlnew_end= `${mlen_date[0]}-${mlen_date[1]}-${mlen_date[2]}`
  
        
//     axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${mlnew_start}&end_date=${mlnew_end}`)
//     .then(res => {
//     const lastmonthly = res.data;
//     this.setState({ lastmonthly });
//     })
//     .catch(err =>{
//       console.log(err)
//     })




//     ////// yearly//////
    
//   let ys_date = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
//   let ye_date = new Date()
//   var s_dateString =new Date(ys_date.getTime() - (ys_date.getTimezoneOffset() * 60000 ))
//     .toISOString()
//     .split("T")[0];
//   let yst_date = s_dateString.split("-")
//   let ynew_start= `${yst_date[0]}-${yst_date[1]}-${yst_date[2]}`
//     // 2020-05-31     17-2020-06

//     var e_dateString = new Date(ye_date.getTime() - (ye_date.getTimezoneOffset() * 60000 ))
//     .toISOString()
//     .split("T")[0];
//   let yen_date = e_dateString.split("-")
//   let ynew_end= `${yen_date[0]}-${yen_date[1]}-${yen_date[2]}`

      
//   axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${ynew_start}&end_date=${ynew_end}`)
//   .then(res => {
//   const yearly = res.data;
//   this.setState({ yearly });
//   })
//   .catch(err =>{
//     console.log(err)
//   })


//     ///////last yearly/////////
    
//   let lys_date =new  Date(Date.now() - 730 * 24 * 60 * 60 * 1000)
//   let lye_date = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
//   var s_dateString = new Date(lys_date.getTime() - (lys_date.getTimezoneOffset() * 60000 ))
//     .toISOString()
//     .split("T")[0];
//   let lyst_date = s_dateString.split("-")
//   let lynew_start= `${lyst_date[0]}-${lyst_date[1]}-${lyst_date[2]}`
//     // 2020-05-31     17-2020-06

//     var lye_dateString = new Date(lye_date.getTime() - (lye_date.getTimezoneOffset() * 60000 ))
//     .toISOString()
//     .split("T")[0];
//   let lyen_date = lye_dateString.split("-")
//   let lynew_end= `${lyen_date[0]}-${lyen_date[1]}-${lyen_date[2]}`

      
//   axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${lynew_start}&end_date=${lynew_end}`)
//   .then(res => {
//   const lastyearly = res.data;
//   this.setState({ lastyearly });
//   })
//   .catch(err =>{
//     console.log(err)
//   })
//   }

//   render() {
//     return (
     
//       <div>
//       <div className="main-wrapper">
//         <div className="sidenavbar">
//           <SideNav onClick= {this.toggleInventoryP}/>
//         </div>
//         <div className="main-content">
//           <Navbar props = {this.handleCallback} heading = {"Executive Summary"}/>
//            <Executive props = {this.state}/>
//         </div>
//       </div>
//    </div>
    
//     )
//   }
// }


// const mapStateToProps = state =>({
//   orders: state
// })

// const mapDispatchToProps = {
//   orders: setOrders
// }

// export default Dashboard