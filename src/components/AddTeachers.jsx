import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function AddPage({ teacherss, setTeachers }) {
    const date = new Date();
    const nowDate = date.getDate().toString().padStart(2, 0) + "-" + (date.getMonth() + 1).toString().padStart(2, 0) + "-" + date.getFullYear();

    const [imgUrl, setImgUrl] = useState(null);
    const [classValue, setClassValue] = useState('');
    const [genderValue, setGenderValue] = useState('');

    const navigate = useNavigate();

    const addFormChangeImg = (evt) => {
        setImgUrl(URL.createObjectURL(evt.target.files[0]));
    }

    const addFormSubmit = (evt) => {
        evt.preventDefault();
        const data = {
            id: students.length ? students[students.length - 1].id + 1 : 1,
            avatarImg: imgUrl,
            name: evt.target.userName.value,
            email: evt.target.userEmail.value,
            phoneNumber: evt.target.userPhone.value,
            enrollnumber: evt.target.userEnNumber.value,
            class: classValue,
            gender: genderValue,
            createdAt: nowDate
        }
        if (imgUrl == null) {
            toast.error('Rasm tanlanishi shart! :(');
        } else {
            toast.success("Muvaffiqatli qo'shildi! :)");
            setStudents([...students, data]);
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    }

    return (
        <div className='flex flex-col items-center justify-center '>
            <div className='flex items-center justify-between w-[980px] mb-5'>
                <h2 className='text-[20px] text-gray-600'>Add Teacher</h2>
                <button className='w-[80px] h-[40px] text-white bg-[#0070F3]  rounded-md'>Save</button>
            </div>
            <Toaster position="top-center" reverseOrder={false} /> 
            <form onSubmit={addFormSubmit} className='flex flex-wrap w-[980px] h-[590px] mt-[50px] '>
                <div className='w-full md:w-[49%] flex flex-col space-y-[16px]'>
                    <label className='flex flex-col space-y-[7px]'>
                        <span>Full name</span>
                        <input className='p-2 rounded-md outline-none focus:shadow-md focus:shadow-[#0070F3]' name='userName' type="text" required placeholder='Full name' style={{ width: '406px', height: '42px' }} />
                    </label>
                    <label className='flex flex-col space-y-[7px]'>
                        <span>Email address</span>
                        <input className='p-2 rounded-md outline-none focus:shadow-md focus:shadow-[#0070F3]' name='userEmail' type="email" required placeholder='Email address' style={{ width: '406px', height: '42px' }} />
                    </label>
                    <label className='flex flex-col space-y-[7px]'>
                        <span>Subject</span>
                        <input className='p-2 rounded-md outline-none focus:shadow-md focus:shadow-[#0070F3]' name='userPhone' maxLength={13} type="text" required placeholder='Subject' style={{ width: '406px', height: '42px' }} />
                    </label>
                    <label className='flex flex-col space-y-[7px]'>
                        <span>About</span>
                        <input className='w-[406px] h-[195px] p-2 rounded-md outline-none focus:shadow-md focus:shadow-[#0070F3]' name='userEnNumber' type="text" required placeholder='About' />
                    </label>
                </div>
                <div className='w-full md:w-[49%] flex flex-col space-y-[16px]'>
                    <label className='flex flex-col space-y-[7px]'>
                        <span>Class</span>
                        <select value={classValue} onChange={(e) => setClassValue(e.target.value)} className='p-2 rounded-md outline-none focus:shadow-md focus:shadow-[#0070F3]' style={{ width: '406px', height: '42px' }}>
                            <option value="1">Class 1</option>
                            <option value="2">Class 2</option>
                            <option value="3">Class 3</option>
                        </select>
                    </label>
                    <label className='flex flex-col space-y-[7px]'>
                        <span>Gender</span>
                        <select value={genderValue} onChange={(e) => setGenderValue(e.target.value)} className='p-2 rounded-md outline-none focus:shadow-md focus:shadow-[#0070F3]' style={{ width: '406px', height: '42px' }}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <label className='flex flex-col space-y-[7px]'>
                        <span>Age</span>
                        <input className='p-2 rounded-md outline-none focus:shadow-md focus:shadow-[#0070F3]' name='userEnNumber' type="number" required placeholder='Age' style={{ width: '406px', height: '42px' }} />
                    </label>
                    <label className='flex flex-col space-x-[7px]'>
                        <span className='cursor-pointer transition hover:font-bold'>Import img</span>
                        <input onChange={addFormChangeImg} className='p-2 scale-0 opacity-0' type="file" required />
                        {imgUrl ?
                            <img src={imgUrl} alt="choose img" width={70} height={60} />
                            : ""}
                    </label>

                </div>
            </form>
        </div>
    );
}

export default AddPage;