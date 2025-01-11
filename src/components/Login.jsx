import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {


   const [form, setform] = useState([
    {
        username:"",
        password:""
       }
   ])

   const navigate = useNavigate()
   const showRef = useRef()
   const PassRef = useRef()

   const handlechange = (event) => {
    const {name , value} = event.target
    setform({...form , [name]:value})
   }

   const handleOnSubmit = (e) => {
    e.preventDefault()
    setform({
        username:"",
        password:""
    })

    const storeduser = JSON.parse(localStorage.getItem('users')) || []
    storeduser.push({...form})
    localStorage.setItem("users" , JSON.stringify(storeduser))
    navigate('/users')
   }


  return (
    <div className='p-5  w-full  flex items-center justify-center flex-col'>
        <i className="fa-solid fa-arrow-left absolute top-4 left-5 text-[19px]"></i>
        <div className="top flex flex-col mt-7 items-center justify-center gap-[50px] ">
            <div className='text-[11.8px] text-gray-600'>
                English (UK) 
                <i className="fa-solid fa-angle-down mx-1"></i>
                
            </div>
            <div><img className='h-[60px] w-[60px] object-cover' src="https://i.pinimg.com/736x/e9/6b/18/e96b18ffce8262f0980f081b06bfdeff.jpg" alt="" /></div>
        </div>




        <div className="center mt-[70px] w-full">
            <form onSubmit={handleOnSubmit} method='POST' action="" className='flex  flex-col gap-3'>
                <div className='item p-2 rounded-2xl h-[60px]  border-[1px] border-gray'>
                    {/* <h4 className='text-[12px] font-semibold'>Username, email address or mobile number</h4> */}
                    <input className='w-full border-none outline-none h-full px-3 bg-transparent placeholder:text-[14px] text-gray-800 ' type="text" name='username' required value={form.username} onChange={handlechange} placeholder='Username, email address or mobile no' />
                </div>

                <div className='item p-2 rounded-2xl h-[60px]  border-[1px] border-gray relative'>
                    {/* <h4 className='text-[12px] font-semibold'>Username, email address or mobile number</h4> */}
                    <input ref={PassRef}  className='w-full border-none outline-none h-full px-3 bg-transparent placeholder:text-[14px] text-gray-800 ' type="password" required name='password' value={form.password} onChange={handlechange} placeholder='Password' />
                    <i onClick={((e)=>{
                     if(PassRef.current.type === "password"){
                        PassRef.current.type = 'text'
                        e.target.classList.add("fa-eye")
                        e.target.classList.remove("fa-eye-slash")
                     }else{
                        PassRef.current.type = 'password'
                        e.target.classList.remove("fa-eye")
                        e.target.classList.add("fa-eye-slash")
                     }
                     
                    })} ref={showRef} className="fa-regular fa-eye-slash   absolute right-6 top-4 text-xl text-gray-500 "></i>
                </div>

                <button className='bg-blue-600 text-white p-2 rounded-3xl' type='submit'>Log in</button>
                <h1 className='w-full mx-auto text-[14px] mt-1 flex items-center justify-center'>Forgotten Password?</h1>
               
            </form>
        </div>
        <div className="bottom flex items-center w-full justify-center flex-col fixed bottom-0 ">
            <button className='border-[1.5px] text-blue-600 text-[14px] border-blue-700 w-[90%] py-2 rounded-3xl'>Create new account </button>
            <img className='h-[60px] bg-red-600' src="https://i.pinimg.com/736x/0e/82/eb/0e82ebf53c1b2a19b7cc92ef74282029.jpg" alt="" />
        </div>
    </div>
  )
}

export default Login