import React from "react"
import Router from 'next/router'

export const withAuth = (Component)=>{
    return class AuthComponent extends React.Component{
        
         componentDidMount (){
            const jwt_token = window.localStorage.getItem("authToken");
            if (!jwt_token) {
              Router.push('/authentication/signin')
            }
          
        }
     

        render(){
            return < Component {...this.props} />
        }
    }
}