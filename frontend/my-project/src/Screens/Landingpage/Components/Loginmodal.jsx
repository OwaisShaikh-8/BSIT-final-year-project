import React from 'react';
import axios from 'axios'
import { useAuth } from '../../../context/Authprovider.jsx';
import { useForm } from "react-hook-form"
const LoginModal = () => {
  const [AuthUser,setAuthUser] = useAuth()
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userinfo = { 
      email: data.email,
      password : data.password
    }
    // console.log(userinfo)

    axios.post("http://localhost:4002/user/login", userinfo) // this is to post credential to backend login api
    .then((response) => {
      if(response.data){
        alert(response.data.message)
      }
      localStorage.setItem("instantMeal", JSON.stringify(response.data))
      setAuthUser(response.data)
      
  
    }
  )
  .catch((error) =>{
    if(error.response){
      alert("Error : " + error.response.data.error)
    }
  })
  
  }
  return (
    <dialog id="my_modal_1" className="modal px-5 md:px-0" >
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-8 mx-auto">
        {/* Close Button */}
        <form method="dialog">
          <button className="absolute top-3 right-4 text-2xl font-bold text-[#3A3A3A] hover:text-[#FFA31A] transition">
            ×
          </button>
        </form>

        <h2 className="text-2xl font-bold text-center text-[#3A3A3A] mb-6">
          Login
        </h2>

        {/* Login Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full bg-gray-100 text-black"
            {...register("email", { required: true })}
            />
          {errors.email && <span className='text-xs text-red-500'>Email is required</span>}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full bg-gray-100 text-black"
            {...register("password", { required: true })}
            />
            {errors.password && <span className='text-xs text-red-500'>Password is required</span>}

          <button
            type="submit"
            className="bg-[#FFA31A] hover:bg-[#e98f00] text-white font-semibold py-2 rounded-full transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-[#3A3A3A]">
          Don&apos;t have an account?{' '}
          <span
            onClick={() => {
              document.getElementById('my_modal_1')?.close();
              document.getElementById('my_modal_2')?.showModal();
            }}
            className="text-[#FFA31A] font-semibold hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </dialog>
  );
};

export default LoginModal;
