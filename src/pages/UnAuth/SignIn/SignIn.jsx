import React from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'



function SignIn({ setToken }) {

  const newData = JSON.parse(window.localStorage.getItem("newToken")) || { newLogin: "Arjumandbonu" }

  const signInSubmit = (evt) => {
    evt.preventDefault()
    const data = {
      login: evt.target.login.value,
      password: evt.target.password.value
    }
    if (data.login == newData.newLogin) {
      toast.success("Muvaffaqiyatli o'tdingiz!")
    }
    else {
      toast.error("Ma'lumotlar mos emas!")
    }
    setTimeout(() => {
      setToken(data)
    }, 1000)

    window.localStorage.setItem("token", JSON.stringify(data))
  }

  return (
    <div className='login w-full h-[100vh] pt-[80px]'>
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className='font-bold text-center mb-[54px] text-[36px] text-[#4F4F4F] mt-[100px]'>Welcome, Log into you account</h1>
      <form onSubmit={signInSubmit} className='w-[512px] pt-[44px] pb-[52px] px-[30px] bg-[white] m-auto'>
        <div className='flex justify-center items-center space-x-[10px]'>
        <p className='font-medium text-[16px] mt-[30px] text-center w-[260px] leading-[25px] text-[#667085]'>It is our great pleasure to have you on board! </p>
        </div>
        <label className='flex flex-col mt-[14px]  justify-center items-center '>
          <input name='login' className=' font-medium text-[14px] outline-none w-[280px] text-[#8A8A8A] border-[1px] border-solid border-[#A7A7A7] py-[14px] px-[15px] rounded-[4px] focus:shadow-md focus:shadow-[#2D88D4]' required type="text" placeholder='Enter your Login' />
        </label>
        <label className='flex flex-col mt-[14px]  justify-center items-center '>
          <input name='password' className='font-medium text-[14px] outline-none w-[280px] text-[#8A8A8A] border-[1px] border-solid border-[#A7A7A7] py-[14px] px-[15px] rounded-[4px] focus:shadow-md focus:shadow-[#2D88D4]' required type="password" placeholder='Enter Password' />
        </label>
        <button className='ml-[86px] bg-[#2D88D4] font-bold w-[280px] p-3 rounded-[4px] text-[14px] text-white mt-[14px]'>Login</button>
        <Link className='text-[12px] font-bold text-[#2D88D4] block text-center mt-[14px]' to={"/sign-up"}>Sign Up</Link>
      </form>
    </div>
  )
}

export default SignIn

