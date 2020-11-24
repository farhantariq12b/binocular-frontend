import SideNav from '../../components/SideNav.js'
import Navbar from '../../components/Navbar.js'
import React, { children } from 'react';
import Router from 'next/router'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    sideNav: true,
    navButton: false
  }
  

  toggleSideNav = () => {
    this.setState ({sideNav : !this.state.sideNav , navButton : !this.state.navButton })
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
        {this.state.sideNav ? <div className="sidenavbar">
          <SideNav toggleSideNav={this.toggleSideNav}/></div> : '' }
          <div className="main-content">
            <Navbar navButton= {this.state.navButton} toggleSideNav={this.toggleSideNav} heading={this.props.heading} handleCallback={this.props.handleCallback} this={this.props.this}/>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard