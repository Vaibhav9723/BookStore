import React from 'react'
import toast from 'react-hot-toast'

const Logout = () => {
  return (
    <div><a className="btn bg-red-600 text-white ml-1" onClick={()=>{
        localStorage.removeItem("User")
        toast.success("Logout Sucessfull")
        setTimeout(()=>{
        window.location.reload()
        },1000)
    }}>Logout</a></div>
  )
}

export default Logout