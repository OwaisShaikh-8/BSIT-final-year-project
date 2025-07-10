import React, { useState } from 'react';

const Signupmodal = () => {
  const [role, setRole] = useState('user'); // 'user' or 'vendor'

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
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full bg-gray-100 text-black"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full bg-gray-100 text-black"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full bg-gray-100 text-black"
              required
            />

            {/* Vendor Only Field */}
            {role === 'vendor' && (
              <input
                type="text"
                placeholder="Business Name"
                className="input input-bordered w-full bg-gray-100 text-black"
                required
              />
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
