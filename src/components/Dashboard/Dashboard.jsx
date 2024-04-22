import React from 'react'
import Bell from "./../../assets/img/bell.svg"
import Profile from "./../../assets/img/profile.svg"
import Student from "./../../assets/img/student.svg"
import Class from "./../../assets/img/class.svg"
 

function Dashboard() {
  return (
    <>
      <div className='w-[1370px]'>
        <div className='p-6 flex bg-[#FCFAFA] justify-between'>
          <div className='w-[583px] ml-[124px]'>
            <h5 className='text-[16px] text-[#424242] font-medium'>Learn  how to launch faster</h5>
            <p className='text-[16px] text-[#424242] '>watch our webinar for tips from our experts and get a limited time offer.</p>
          </div>
          <div className='flex flex-row gap-[40px]'>
            <img src={Bell} alt="Ring Bell" width={23} height={23} />
            <button className='bg-[#509CDB] w-[120px] h-[40px] rounded-[8px] text-[14px] text-[#FCFAFA] font-bold mr-[127px]'>Log out</button>
          </div>
        </div>
      </div>
      <div>
        <h3 className='text-center text-[36px] font-bold text-[#4F4F4F] mt-[53px]'>Welcome to your dashboard, Udemy school</h3>
        <p className='text-center mr-[150px] mt-[20px] text-[24px] text-[#4F4F4F]'>Uyo/school/@teachable.com</p>
      </div>
      <div className='w-[758px] h-[458px] mx-auto'>
        <div className='flex pl-[130px] pt-[45px]'>
          <img className='mr-[20px]' src={Profile} alt="ava" width={36} height={36} />
          <div>
            <h5 className='text-[24px] text-[#4F4F4F] text-bold mb-[16px] mt-[43px]'>Add other admins</h5>
            <p className='text-[14px] text-[#4F4F4F]'>Create rich course content and coaching products for your students. <br />
              When you give them a pricing plan, they'll appear on your site!</p>
          </div>
        </div>
        <div className='flex pl-[130px]'>
          <img className='mr-[20px]' src={Class} alt="ava" width={36} height={36} />
          <div>
            <h5 className='text-[24px] text-[#4F4F4F] text-bold mb-[16px] mt-[43px]'>Add classes</h5>
            <p className='text-[14px] text-[#4F4F4F]'>Create rich course content and coaching products for your students. <br />
              When you give them a pricing plan, they'll appear on your site!</p>
          </div>
        </div>
        <div className='flex pl-[130px]'>
          <img className='mr-[20px]' src={Student} alt="ava" width={36} height={36} />
          <div>
            <h5 className='text-[24px] text-[#4F4F4F] text-bold mb-[16px] mt-[43px]'>Add students</h5>
            <p className='text-[14px] text-[#4F4F4F]'>Create rich course content and coaching products for your students. <br />
              When you give them a pricing plan, they'll appear on your site!</p>
          </div>
        </div>
      </div>
      <img className='ml-[1100px]' src="src/assets/img/Component 1.png" alt="" />
    </>
  )
}

export default Dashboard