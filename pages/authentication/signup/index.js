import React , {useState} from "react"
import Link from 'next/link'
import Axios from "axios"
import { useRouter } from 'next/router'
import {useForm} from 'react-hook-form'
import { min } from "date-fns"


function SignUp() {

    const router = useRouter();
    const {register ,handleSubmit,errors } =useForm();
    const [state , setState] = useState({
      user:"",
      email:"",
      password:""
    })
    var car = {type:"Fiat", model:"500", color:"white"};
    const userReq = (user)=> {
      Axios({
        method: 'post',
        url: `${process.env.SERVER_URL}/api/users/signup`,
        data: user
      }).then((response) => {
        console.log(response);
        if (response.status == 200){
          localStorage.setItem("authToken", response.data.authToken);
          router.push("/executivesummary")
        }
        else{
          alert(" unable to create user ")
        }
      }, (error) => {
        console.log(error);
      });
      
    }
    const onSubmit = data =>  userReq(state);

    // const handleSubmit=(evt)=>{
    //     evt.preventDefault()
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
                  <label>EMAIL</label>
                </div>
                <div className="f-input m-tb-input">
                  <input type="text" placeholder="E-MAIL" name="email" ref= {register({required: true, minLength : 5 ,  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} onChange = {handleChange}/>
                  <div className = "error-div">
                    {errors.email && errors.email.type === "required" && <small>required</small>}
                    {errors.email && errors.email.type === "minLength" && <small>Minimum 5 length required</small> }
                    {errors.email && errors.email.type === "pattern" && <small>please enter correct Email</small> }
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
                  <button type="submit" value="Submit">SIGN UP</button>
                </div>
              </div>
            </div>
            <Link href="/authentication/signin">
                <small>already have account ?</small>
            </Link>
        </form>
      </div>
    </div>
)}
  
  export default SignUp