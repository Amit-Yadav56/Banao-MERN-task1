import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Cross, Google, fb, signinbanner } from "../assets/img/index";

const SignUp = ({ setOpen, open, setOpen2 }) => {
  return (
    <div className={`fixed inset-0 z-50 ${open ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-65"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/*This is the main container */}
        <div className="relative bg-white rounded-lg w-[736px] h-[513px]">
          <button onClick={() => setOpen(false)} className="absolute top-[-3rem] right-[-1rem] text-gray-700  ">
            <img src={Cross} alt="" />
          </button>
          <p className="text-center text-green-600 bg-green-100 py-4 rounded-md  text-[14px] font-[500]">
            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
          </p>
          <div className='p-6'>

            <div className="flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-1/2 mb-0">
                <p className="font-bold text-xl mb-5">Create Account</p>
                <div className='name flex flex-row '>
                  <input className="w-full p-2 h-[46px] bg-gray-100 border border-gray-300 rounded-[2px]" type="text" placeholder="First Name" />
                  <input className="w-full p-2 h-[46px] bg-gray-100 border border-gray-300 rounded-[2px]" type="text" placeholder="Last Name" />
                </div>
                <input className="w-full p-2 h-[46px] bg-gray-100 border border-gray-300 rounded-[2px]" type="text" placeholder="Email" />
                <input className="w-full p-2 h-[46px] bg-gray-100 border border-gray-300 rounded-[2px]" type="password" placeholder="Password" />
                <input className="w-full p-2 mb-4 h-[46px] bg-gray-100 border border-gray-300 rounded-[2px]" type="password" placeholder="Confirm Password" />
                <button className="w-full py-2 bg-blue-600 text-white rounded-[20px] font-semibold mb-4">Create Account</button>
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

              </div>
              <div className="hidden lg:block w-1/2 pl-6">
                <p className="font-sans text-[13px] text-right">
                  Already have an account? <span className="text-blue-600 cursor-pointer font-semibold" onClick={() => { setOpen2(true); setOpen(false); }}>Sign In</span>
                </p>
                <img className="w-full" src={signinbanner} alt="Sign In Banner" />
                <p className="text-sm text-center mt-4">
                  By signing up, you agree to our <span className="text-blue-600 cursor-pointer">Terms & Conditions</span>, <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
