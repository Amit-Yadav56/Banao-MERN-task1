import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Cross, Google, Views, fb, signinbanner } from "../assets/img/index";

const SignIn = ({ setOpen2, open2, setOpen }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className={`fixed inset-0 z-50 ${open2 ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-65"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/*This is the main container */}
        <div className="relative bg-white rounded-lg h-[457px] w-[736px]">
          <button onClick={() => setOpen2(false)} className="absolute top-[-3rem] right-[-1rem] text-gray-700  ">
            <img src={Cross} alt="" />
          </button>
          <p className="text-center text-green-600 bg-green-100 py-4 rounded-md mb-6 text-[14px] font-[500]">
            Let's learn, share & inspire each other with our passion for computer engineering. Sign in now 🤘🏼
          </p>
          <div className='p-6'>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <p className="font-bold text-xl mb-4">Sign In</p>
                <input className="w-full p-2 bg-gray-100 border border-gray-300 rounded-[2px]" type="text" placeholder="Email" />
                <div className="relative w-full">
                  <input
                    className="w-full p-2 mb-4 bg-gray-100 border border-gray-300 rounded-[2px] pr-10"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 h-[40px]"
                  >
                    <img src={Views} alt="Toggle Password" className={`h-5 w-5`} />
                  </button>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-[20px] font-semibold text-[14px] font-sans mb-6">Sign In</button>
                <button className="w-full  py-2 rounded flex items-center justify-center mb-2 border-[0.6px] border-solid border-[#D9D9DB]">
                  <img src={fb} alt="" className='mr-2' />
                  <p className=' text-black text-[14px] font-[500] font-sans'>
                    Sign in with Facebook
                  </p>
                </button>
                <button className="w-full py-2 rounded flex items-center justify-center border-[0.6px] border-solid border-[#D9D9DB]">
                  <img src={Google} alt="" className='mr-2' />
                  <p className=' text-black text-[14px] font-[500] font-sans'>
                    Sign in with Google
                  </p>
                </button>
                <button className='w-full'>
                  <p className='font-sans text-[12px] font-[500] text-center mt-[20px]'>Forgot Password?</p>
                </button>

              </div>
              <div className="hidden lg:block w-1/2 pl-6">
                <p className="text-right text-[13px] mb-2 font-sans">
                  Don’t have an account yet? <span className="text-blue-600 cursor-pointer font-semibold" onClick={() => { setOpen2(false); setOpen(true); }}>Create new for free!</span>
                </p>
                <img className="w-full" src={signinbanner} alt="Sign In Banner" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default SignIn;
