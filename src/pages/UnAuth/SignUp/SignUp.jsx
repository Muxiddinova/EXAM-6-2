import React from 'react'
import  { toast, Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


function SignUp({setSignUpData}) {

  const navigate = useNavigate()

  const signUpSubmit = (e) => {
    e.preventDefault()
    const data = {
      newLogin: e.target.newLogin.value,
      newPassword: e.target.newPassword.value,
    }
    toast.success("Ma'lumotlar yangilandi!")
    setTimeout(() =>{
      setSignUpData(data)
      navigate("/")
    }, 1000)
    window.localStorage.setItem("newToken", JSON.stringify(data))

  }

  return (
    <div className='login w-full h-[100vh]  pt-[80px]'>
    <Toaster position="top-center" reverseOrder={false} />
    <h1 className='font-bold text-center mb-[54px] text-[36px] text-[#4F4F4F] mt-[100px]'>Welcome, Sign Up</h1>
      <form onSubmit={signUpSubmit} className='w-[512px] h-[494px] pt-[44px] pb-[52px] px-[30px] bg-[white] m-auto'>
        <div className='flex justify-center items-center space-x-[10px]'>
        <p className='font-medium text-[16px] mt-[30px] text-center w-[260px] leading-[25px] text-[#667085]'>It is our great pleasure to have you on board! </p>
        </div>
        <label className='flex flex-col mt-[14px]  justify-center items-center '>
          <input name='login' className=' font-medium text-[14px] outline-none w-[280px] text-[#8A8A8A] border-[1px] border-solid border-[#A7A7A7] py-[14px] px-[15px] rounded-[4px] focus:shadow-md focus:shadow-[#2D88D4]' required type="email" placeholder='Enter your Email' />
        </label>
        <label className='flex flex-col mt-[14px]  justify-center items-center '>
          <input name='newLogin' className=' font-medium text-[14px] outline-none w-[280px] text-[#8A8A8A] border-[1px] border-solid border-[#A7A7A7] py-[14px] px-[15px] rounded-[4px] focus:shadow-md focus:shadow-[#2D88D4]' required type="text" placeholder='Enter your Login' />
        </label>
        <label className='flex flex-col mt-[14px]  justify-center items-center '>
          <input name='newPassword' className='font-medium text-[14px] outline-none w-[280px] text-[#8A8A8A] border-[1px] border-solid border-[#A7A7A7] py-[14px] px-[15px] rounded-[4px] focus:shadow-md focus:shadow-[#2D88D4]' required type="password" placeholder='Enter Password' />
        </label>
        <button className='ml-[85px] bg-[#2D88D4] font-bold w-[280px] p-3 rounded-[4px] text-[14px] text-white mt-[34px]'>Sign Up</button>
    </form>
  </div>
  )
}

export default SignUp