import App from "next/app"
import {Provider} from "react-redux"
import withRedux from "next-redux-wrapper"
import React from "react"
import '../styles/globals.css'
import 'bootstrap-daterangepicker/daterangepicker.css';
import store from "../redux/store"
class MyApp extends React.Component {
  static async  getInitialProps({ Component,ctx}){
    const appProps = Component.getInitialProps ?  await Component.getInitialProps(ctx): {};
    return{appProps :  appProps}
  }
  

  render(){
    const { Component , appProps }= this.props;

    return(
      <Provider store={store}>
        <Component {...appProps}/>
      </Provider>
    )
  }

}

const makeStore =()=>  store;

export default withRedux(makeStore)(MyApp) 
