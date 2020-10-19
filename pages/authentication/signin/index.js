import React , {useState,  useContext } from "react"
import Link from 'next/link'
import Axios from "axios"
import { useRouter } from 'next/router'
import {useForm} from 'react-hook-form'
import { min } from "date-fns"



function SignUp() {
  const router = useRouter()
  const {register ,handleSubmit,errors } =useForm();
    const [state , setState] = useState({
      user:"",
      password:"",
      error:false
    })
    const url = "/executivesummary"
   
    const userReq = (user)=> {
      Axios({
        method: 'post',
        url: `${process.env.SERVER_URL}/api/users/signin`,
        data: user
      }).then((response) => {
        console.log(response);
        if (response.status == 200){
          console.log(response)
          localStorage.setItem("authToken", response.data.authToken);
          router.push("/executivesummary")
        }
        else{
         setState({
           ...state,
           error: !state.error
         })
        }
       
      }, (error) => {
        console.log(error);
        setState({
          ...state,
          error: !state.error
        })
      });
      
    }

    const onSubmit = data =>  userReq(state);
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     console.log(state)
    //     userReq(state)
        
        
    // }
    const handleChange=(evt)=> {
      const value = evt.target.value;
      setState({
        ...state,
        [evt.target.name]: value
      });
    }
    
    return (
    <div className="user-wrapper" >
      <div  className= "user-box">
        <form action="" onSubmit={handleSubmit(onSubmit)} method="post">  
            <div className="flex">
              <div className="col-3-form">
                <div className="form-label">
                  <label>USER</label>
                </div>
                <div className="f-input m-tb-input">
                <input type="text" placeholder="USERNAME" name="user" ref= {register({required: true, minLength : 5 , pattern: /^[A-Za-z]+$/i })} onChange = {handleChange}/>
                  <div className = "error-div">
                    {errors.user && errors.user.type === "required" && <small>required</small>}
                    {errors.user && errors.user.type === "minLength" && <small>Minimum 5 length required</small> }
                    {errors.user && errors.user.type === "pattern" && <small>please enter correct username</small> }
                  </div>
                </div>               
                
                <div className="form-label">
                  <label>PASSWORD</label>
                </div>
                <div className="f-input m-tb-input">
                <input type="password" placeholder="PASSWORD"  name="password" ref= {register({required: true, minLength : 5})} onChange = {handleChange}/>
                  <div className = "error-div">
                    {errors.password && errors.password.type === "required" && <small>required</small>}
                    {errors.password && errors.password.type === "minLength" && <small>Minimum 5 length required</small> }
                  </div>
                </div>
                <div className="f-input m-tb-input">
                  <button type="submit" value="Submit">SIGN IN</button>
                </div>
                <div className = "error-div">
                  {state.error ? <small>USER NOT FOUND</small> : ''}
                </div>
              </div>
            </div>
            <Link href="/authentication/signup">
                <small>Don't have account ?</small>
            </Link>
        </form>
      </div>
    </div>
     
)}
  
  export default SignUp