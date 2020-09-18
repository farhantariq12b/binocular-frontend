// import Head from 'next/Head'
import SideNav from '../components/SideNav.js'
import Navbar from '../components/Navbar.js'
import FullCard from '../components/FullCard.js'
export default function Home() {
  return (
    <div>
      
        <title>Binoculars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
     
      <div>
        <div className="main-wrapper">
          <div className="sidenavbar">
            <SideNav />
          </div>
          <div className="main-content">
            <Navbar />
            <FullCard />
          </div>
        </div>
        
        
       
      </div>
      
    </div>
  )
}

