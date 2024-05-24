import React, { useEffect } from 'react'
import { useNavigate }  from 'react-router-dom';
import {useForm} from "react-hook-form";
import Textbox from '../components/textbox';
import Button from '../components/Button';

const login=()=> {
  const user = "";
  const {register, handleSubmit, formState: {errors},}= useForm();

  const navigate = useNavigate();

  const submitHandler =async (data)=> {
    console.log("submit"); "submit"

  }


  useEffect(() => {
    user && navigate ("/dashboard");
  },[user]);

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>

      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
         {/* {left side}  */}
         <div className='h-full w-full lg:w-2/3 flex-col items-center justify-center'>
          <div className='w-full  md:max-w-lg 2xl:max-w-3xl flex flex-col item-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
            <span className='flex gap-1  mt-2 py-1 pl-20 border  rounded-full text-sm md:text-base 2xl:w-full md:pl-[15vw] border-gray-300 text-gray-400 '> Manage all your task in one </span>
            <p className=' capitalize flex flex-col gap-y-4 md:gap-4 text-4xl md:text-6xl 2xl:text-6xl font-black text-center text-blue-700 '>
            <span>TECHLUME</span>
              <span> the <strong className='text-gray-600'>progress</strong>  tracker</span>
              
            </p>
            <div className='cell'></div>
            <div className='circle rotate-in-up-left '></div>


          </div>
         </div>
         {/* right side */}
         <div className='w-full md:w-1/3 p-4 md:p- flex flex-col justify-center items-center'>
          <form onSubmit={handleSubmit(submitHandler)}
          className='from-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14 '
          ><div className=''>
            <p className='text-blue-600 text-3xl font-3xl font-bold text-center capitalize'>welcome back!</p>
            <p className='text-center text-base text-gray-700 capitalize '> keep all your credential safge.</p>
            <div className=''></div>
            <div className='flex mt-5 flex-col gap-y-5 '>
              <Textbox
              placeholder= "email@example.com"
              type="email"
              name="email"
              label="Email Address"
              className='w-full rounded-full'
              register={register("email",{required: "email address is required!"})}
              error={errors.email ? errors.email.message : ""}
              />

<Textbox
              placeholder= "your password"
              type="password"
              name="password"
              label="Enter Your Password"
              className='w-full rounded-full'
              register={register("password",{required: "password is required!"})}
              error={errors.password ? errors.password.message : ""}
              />

              <span className='text-sm hover:text-blue-600 hover:underline cursor-pointer text-gray-500'>forget password?</span>

              <Button type='submit' label="submit"
               className='w-full h-10 by-blue-700 text-white'></Button>
            </div>

          </div>

          </form>
         </div>

      </div>
    </div>

  );
};

export default login