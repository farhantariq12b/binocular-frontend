// import Head from 'next/Head'
import Dashboard from './dashboard/index.js'

export default function Home() {
  return (
    <div>
      
        <title>Binoculars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
     
      <div>
       <Dashboard/>
      </div>
      
    </div>
  )
}

