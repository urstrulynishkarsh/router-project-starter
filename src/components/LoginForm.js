import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

function LoginForm({setIsLoggedIn}) {
    const navigate=useNavigate();

    const[FormData,setFormData]=useState({
        email:"",password:""
    }
    )
    function changeHandler(event){
        
        setFormData((prevFormData)=>{
            return{ 
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        })

    }

    const[Password,setPassword] =useState(false)

    function clickHandler(prev){
        setPassword(prev=>!(prev))
    }

    function submitHandler(event){
        event.preventDefault()
        setIsLoggedIn(true);
        toast.success("Login successful")

        navigate("/dashboard")
    }


  return (
    
        <form className='flex flex-col w-full gap-y-4 mt-6' onSubmit={submitHandler}>
            <label className='w-full'>
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

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5mb-1 leading-[1.375rem]'>
                    Password<sup className='text-pink-200'>*</sup>
                </p>
                <input
                 className='bg-richblack-800 rounded-[0.5rem] mt-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] text-richblack-5 w-full p-[12px]'
                onChange={changeHandler}
                type={Password?('text'):('password')}
                value={FormData.password}
                name="password"
                placeholder='Enter your password'/>
            
            {/* onClick={()=>setPassword((prev)=>!prev)} */}
            <span className='absolute cursor-pointer right-3 top-[38px] text-white text-3xl' onClick={clickHandler} >
                {Password?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>

            <Link to="#">
            <p className='absolute right-0 text-[red] '>
                Forgot your password
            </p>
            </Link>
            </label>

            <button className='bg-[yellow] rounded-[20px] font-medium text-richblack-700 mt-5 px-[12px] py-[1rem]'>Sign In</button>

        </form>

  )
}

export default LoginForm