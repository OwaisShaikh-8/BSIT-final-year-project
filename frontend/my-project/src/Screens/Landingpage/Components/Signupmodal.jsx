import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../context/Authprovider.jsx';
const Signupmodal = () => {
  const [role, setRole] = useState('user'); // 'user' or 'vendor'
  const [AuthUser,setAuthUser] = useAuth()
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const password = watch("password", "")
    // const confirmPassword = watch("confirmPassword", "")

    const validateConfirmPassword = (value) => {
      return value === password || "password do not match"
    }
    
  
    const onSubmit = async (data) => {
      const { fullname, email, password, confirmPassword, companyName } = data;

const userinfo = {
  fullname,
  email,
  password,
  confirmPassword,
  ...(role === 'vendor' && { companyName }), //... is used to spread (copy) properties from one object into another.

};

        const endpoint = (role === 'vendor' ? 'http://localhost:4002/user/vendorsignin' : 'http://localhost:4002/user/customersignin')

      await axios.post(endpoint,userinfo)
      .then((response) => {
          if (response.data) {
            alert(response.data.message)
          }        
          localStorage.setItem("instantmeal", JSON.stringify(response.data))
          setAuthUser(response.data);
          console.log(AuthUser)
     
      }
      )
      .catch((error) => {
        if(error.response){
          alert(error.response.data.error)
        }
      }
      )
    

      // if(role === 'vendor'){
      //   axios.post("http://localhost:4002/user/vendorsignin", userinfo)
      //   .then((response) =>{
      //     if(response.data){
      //       alert(response.data.message)
      //     }
      //   } 
      //   )
      
      //   .catch((error) => {
      //     if(error.response){
      //       alert(error.response.data.error)
      //     }
      //   }
      //   )
        
      // }
      // else{
      //   axios.post("http://localhost:4002/user/customersignin", userinfo)
      //   .then((response) =>{
      //     if(response.data){
      //       alert(response.data.message)
      //     }
      //   } 
      //   )
      
      //   .catch((error) => {
      //     if(error.response){
      //       alert(error.response.data.error)
      //     }
      //   }
      //   )
        
      // }
    }

  return (
    <dialog id="my_modal_2" className="modal  px-5 md:px-0">
      
        {/* White content box */}
        <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-8 mx-auto">
          {/* Close Button */}
          <form method="dialog">
            <button className="absolute top-3 right-4 text-2xl font-bold text-[#3A3A3A] hover:text-[#FFA31A] transition">
              ×
            </button>
          </form>

          <h2 className="text-2xl font-bold text-center text-[#3A3A3A] mb-6">Sign Up</h2>

          {/* Toggle Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <button
              onClick={() => setRole('user')}
              className={`w-full md:w-20 text-center  py-2 rounded-full font-medium transition ${
                role === 'user'
                  ? 'bg-[#FFA31A] text-white'
                  : 'bg-[#3A3A3A] text-white hover:bg-gray-300'
              }`}
            >
              User
            </button>
            <button
              onClick={() => setRole('vendor')}
              className={`w-full md:w-20 text-center  py-2 rounded-full font-medium transition ${
                role === 'vendor'
                  ? 'bg-[#FFA31A] text-white'
                  : 'bg-[#3A3A3A] text-white hover:bg-gray-300'
              }`}
            >
              Vendor
            </button>
          </div>

          {/* Shared Signup Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full bg-gray-100 text-black"
              {...register("fullname", { required: true })}
              />
             {errors.fullName && <span>This field is required</span>}
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full bg-gray-100 text-black"
              {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full bg-gray-100 text-black"
              {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            
            <input
              type="password"
              placeholder="confirmPassword"
              className="input input-bordered w-full bg-gray-100 text-black"
              {...register("confirmPassword", { required: true , validate: validateConfirmPassword})}
              />
              {errors.confirmPassword && <span>
                {errors.confirmPassword.message}
                </span>}

            {/* Vendor Only Field */}
            {role === 'vendor' && (
              <>
              <input
                type="text"
                placeholder="Business Name"
                className="input input-bordered w-full bg-gray-100 text-black"
                {...register("companyName", { required: role === 'vendor' })}
                />
                {errors.companyName && <span>companyName is required</span>}
                </>
            )}

            <button
              type="submit"
              className="bg-[#FFA31A] hover:bg-[#e98f00] text-white font-semibold py-2 rounded-full transition"
            >
              {role === 'user' ? 'Sign Up as User' : 'Sign Up as Vendor'}
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-[#3A3A3A]">
            Already have an account?{' '}
            <button  className="text-[#FFA31A] font-semibold hover:underline"
            onClick={() => {
              document.getElementById('my_modal_2')?.close();
              document.getElementById('my_modal_1')?.showModal();
            }}
            >
              Login
            </button>
          </p>
        </div>
      
    </dialog>
  );
};

export default Signupmodal;
