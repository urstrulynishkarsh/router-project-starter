import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast'

function Navbar(props) {
    let IsLoggedIn=props.IsLoggedIn
    let setIsLoggedIn=props.setIsLoggedIn

  return (
    <div className='flex bg-[#86bacf] justify-around py-3 items-center  '>
        <Link to="/"><img src={logo}  width={160} height={32} loading='lazy'/></Link>
        <div className='flex gap-x-6 text-white'>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
        </div>
        <div className='flex gap-3 relative'>
            { !IsLoggedIn &&
                <Link to="/login">
                    <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button>
                </Link>
            }
             {  !IsLoggedIn &&
                <Link to="/Signup">
                    <button className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Signup</button>
                </Link>
            }
             {  IsLoggedIn &&
                <Link to="/">
                    <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={()=>{setIsLoggedIn(false)
                    toast.success("Logged out")}}>Logout</button>
                </Link>
            }
             {  IsLoggedIn &&
                <Link to="/Dashboard">
                    <button className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Dashboard</button>
                </Link>
            }
        </div>
        
    </div>
  )
}

export default Navbar