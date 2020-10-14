// import Head from 'next/Head'
import Executive from './executivesummary/index'
import Router from 'next/router'
import React , {useEffect} from "react"

export default function Home() {
 
  useEffect(() => { 
    const {pathname} = Router
    if(pathname == '/' ){
      Router.push('/authentication/signin')
    }  
  }
  , []);
  return (
    null
    // <div>
      
    //     <title>Binoculars</title>
    //     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    //     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

    // </div>
  )
}

