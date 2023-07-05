import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

function SignupForm({setIsLoggedIn}) {
  const navigate=useNavigate();
  const[FormData,setFormData]=useState({
    firstname:"",lastname:"",email:"",password:"",confirmPassword:""
})
function changeHandler(event){
        
  setFormData((prevFormData)=>{
      return{ 
          ...prevFormData,
          [event.target.name]:event.target.value
      }
  })

}

const[Password,setPassword] =useState(false)
const[Password1,setPassword1] =useState(false)
const[accountType,setacountType] =useState("student")

function submitHandler(event){
  event.preventDefault()
  if(FormData.password!==FormData.confirmPassword)
  {
    toast.error("Your password does not match  please try again.");
    return;
  }
  setIsLoggedIn(true);
  toast.success("Account Created successful")

  navigate("/dashboard")
}
  return (
    <div>
        <div className='flex bg-richblack-800 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType==="student"?"bg-richblack-900 text-richblack-5 ":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `} onClick={()=>setacountType("student")}>Student</button>
            <button className={`${accountType==="instructor"?"bg-richblack-900 text-richblack-5 ":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `} onClick={()=>setacountType("instructor")}>Instructor</button>

        </div>
        <form classname="h-full" onSubmit={submitHandler}>
          <div className='flex gap-[1rem] '>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5mb-1 leading-[1.375rem]'>
                    FirstName<sup className='text-pink-200'>*</sup>
                </p>
                <input
                 className='bg-richblack-800 rounded-[0.5rem] mt-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] text-richblack-5 w-full p-[12px]'
                onChange={changeHandler}
                type='text'
                value={FormData.firstname}
                name="firstname"
                placeholder='Enter your firstname'/>
            </label>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5mb-1 leading-[1.375rem]'>
                    LastName<sup className='text-pink-200'>*</sup>
                </p>
                <input
                 className='bg-richblack-800 rounded-[0.5rem] mt-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] text-richblack-5 w-full p-[12px]'
                onChange={changeHandler}
                type='text'
                value={FormData.lastname}
                name="lastname"
                placeholder='Enter your lastname'/>
            </label>
            </div>
            <label>
                <p className='text-[0.875rem] text-richblack-5mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
                <input
                 className='bg-richblack-800 rounded-[0.5rem] mt-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] text-richblack-5 w-full p-[12px]'
                onChange={changeHandler}
                type='email'
                value={FormData.email}
                name="email"
                placeholder='Enter your Email'/>
            </label>
            <div className='flex gap-[1rem]'>
            <label className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5mb-1 leading-[1.375rem]'>
                   Create Password<sup className='text-pink-200'>*</sup>
                </p>
                <input
                 className='bg-richblack-800 rounded-[0.5rem] mt-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] text-richblack-5 w-full p-[12px]'
                onChange={changeHandler}
                type={Password?('text'):('password')}
                value={FormData.password}
                name="password"
                placeholder='Enter your password'/>
            
            {/* onClick={()=>setPassword((prev)=>!prev)} */}
            <span className='absolute cursor-pointer right-3 top-[40px] text-white text-3xl' onClick={()=>setPassword((prev)=>!prev)} >
                {Password?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
            </label>
            <label className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5mb-1 leading-[1.375rem]'>
                    ConfirmPassword<sup className='text-pink-200'>*</sup>
                </p>
                <input
                 className='bg-richblack-800 rounded-[0.5rem] mt-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] text-richblack-5 w-full p-[12px]'
                onChange={changeHandler}
                type={Password1?('text'):('password')}
                value={FormData.confirmPassword}
                name="confirmPassword"
                placeholder='Enter Confirm Pass....'/>
            
            {/* onClick={()=>setPassword((prev)=>!prev)} */}
            <span className='absolute cursor-pointer right-3 top-[40px] text-white text-3xl' onClick={()=>setPassword1((hello)=>!hello)} >
                {Password1?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
            </label>
            </div>
            
            <button className='bg-[yellow] w-full rounded-[20px] font-medium text-richblack-700 mt-5 px-[12px] py-[1rem]'>
              Sign Up
            </button>

        </form>


    </div>
  )
}

export default SignupForm