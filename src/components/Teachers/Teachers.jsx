import React from 'react';
import Bell from './../../assets/img/bell.svg';
import SearchIcon from './../../assets/img/search.svg';

function Teachers() {
  return (
    <>
      <div className='flex flex-row gap-[8px] justify-end'>
        <img className='mt-[24px]' src={Bell} alt="Ring Bell" width={23} height={23} />
        <button className='bg-[#ffff] w-[120px] h-[40px] rounded-[8px] text-[14px] text-[#424242] font-bold mr-[127px] mt-[19px]'>Log out</button>
      </div>
      <div className='w-full flex justify-end mt-[30px]'>
        <h4 className='text-[20px] text-[#4F4F4F] font-bold ml-[38px]'>Teachers</h4>
        <Link to="/add" className='bg-[#509CDB] w-[122px] h-[41px] rounded-[4px] text-[14px] text-[#FCFAFA] font-bold mr-[155px] m-auto'>Add teachers</Link>
      </div>
      <form style={{ position: 'relative' }}>
        <img style={{ position: 'absolute', left: '20px', top: '20px' }} src={SearchIcon} alt="" />
        <input style={{ paddingLeft: '40px', width: '1180px', backgroundColor: '#FCFAFA', height: '49px', outline: 'none', color: '#8A8A8A', fontSize: '14px', fontWeight: 'medium', marginLeft: '38px' }} type="text" placeholder="Search for a student by name or email" />
      </form>
      <img className='w-[1900px] h-[500px]' src="src/assets/img/kuola.png" alt="" />
      <img className='ml-[1100px]' src="src/assets/img/Component 1.png" alt="" />
    </>
  );
}

export default Teachers;


