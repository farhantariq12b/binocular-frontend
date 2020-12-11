import SideNav from '../../components/SideNav.js'
import Navbar from '../../components/Navbar.js'
import React, { children } from 'react';
import Router from 'next/router'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const {pathname} = Router
    if(pathname == '/' ){
      Router.push('/executivesummary')
    }   
  }
  
  render(){
    return (
      <div>
        <div className="main-wrapper">
          <div className="sidenavbar">
            <SideNav/>
          </div>
          <div className="main-content">
            <Navbar heading={this.props.heading} handleCallback={this.props.handleCallback} this={this.props.this}/>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard