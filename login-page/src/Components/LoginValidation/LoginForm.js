import React , {useState,useEffect} from 'react';
import '../login.css';
import image from'../truck.webp';
import validation from './Validation';


const LoginForm = () => {
const[values,setValues]=useState({
  name:'',
  password:''
})

const[errors,setError]=useState({});
function handleChange(e){
setValues({...values,[e.target.name]:e.target.value});
}


function handleSubmit(e) {
  e.preventDefault();
  setError(validation(values));
  // const validationErrors = Validation(values);
  // setErrors(validationErrors);
}
useEffect(()=>{
  if(Object.keys(errors).length===0 &&(values.name !== ""&& values.password !=="")){
alert("Form Submitted");
} 
},[errors,values]);

return (
    <div className='wrap'>
      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
        <img src={image} alt="Avatar" className="avatar"/>
        </div>
        <div className="container">
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" value={values.name} name="name" onChange={handleChange} />
{errors.name && <p style={{color:"red", fontSize:"13px"}}>{errors.name}</p>}

          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" value={values.password} name="password"onChange={handleChange} />
          {errors.password && <p style={{color:"red", fontSize:"13px"}}>{errors.password}</p>}


          <button type="submit"><b>Login</b></button>
          <input type="checkbox" />Remember me

        </div>
        <div className="container" style={{backgroundColor:"#f1f1f1"}}>
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Forgot<a href="#">Password</a></span>

        </div>




      </form>

    </div>
  )
}

export default LoginForm;
