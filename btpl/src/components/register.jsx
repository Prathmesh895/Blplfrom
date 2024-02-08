import React from 'react'
import Link from 'next/link'

function register() {
  return (
    <main>
      <section className='flex flex-col justify-center border shadow rounded-lg m-10  md:mx-auto md:w-1/2 py-5 '>
        <div className='flex justify-center text-3xl font-semibold '>Sign up</div>
        <form action="">
          <div className='flex flex-col mx-5'>
            <label htmlFor="text" className='text-sm py-2'>First name <sup className='text-red-600'>*</sup> (as per documents)</label>
            <input type="text" className='text-sm border pl-2 border-gray-300 rounded-t h-10 shadow-sm' placeholder='John' required />

            <label htmlFor="text" className='text-sm py-2'>Last name<sup className='text-red-600'>*</sup></label>
            <input type="text" name="" id="" className='text-sm border pl-2 border-gray-300 rounded-t h-10 shadow-sm' placeholder='Doe' required/>

            <label htmlFor="email" className='text-sm py-2'>Email address<sup className='text-red-600'>*</sup></label>
            <input type="email" className='text-sm border pl-2 border-gray-300 rounded-t h-10 shadow-sm' placeholder='johndoe@example.com' required />

            <label htmlFor="text" className='text-sm py-2'>Country of residence <sup className='text-red-600'>*</sup></label>
            <input type="text" className='text-sm border pl-2 border-gray-300 rounded-t h-10 shadow-sm' placeholder='Enter the country' required />
            {/* code for Password  */}
            {/* <div> */}
             <label htmlFor="password" className='text-sm py-2'>Password<sup className='text-red-600'>*</sup></label>
              {/* <div> */}
               <input type="password" className='text-sm border pl-2 border-gray-300 rounded-t h-10 shadow-sm' placeholder='Password' required />
              {/* </div> */}

            {/* </div> */}
           
            {/* Code for confirm passsword */}
            <div className='relative'>
            <label htmlFor="password" className='text-sm py-2'>Confirm password<sup className='text-red-600'>*</sup></label>
            <div className='flex items-center relative'>
            <input type="password" className='apperance-none  text-sm border pl-2 border-gray-300 rounded-t h-10 shadow-sm w-full' placeholder='Confirm Password' required />
            <button className="absolute left-full -translate-x-full p-2 z-20" data-test="show-password">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg">
              <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
             </svg>
            </button>
            </div>
            </div>

            <label htmlFor="password" className='text-sm py-2'>Referral code<sup className='text-red-600'>*</sup></label>
            <input type="text" className='text-sm border pl-2  border-gray-300 rounded-t h-10 shadow-sm' placeholder='Enter referral code or Btpl123' required />
            <div className='mt-2'>
              <input type="checkbox" /><span className='md:text-sm text-xs p-2'>By signing up,you agree to the</span><span className='text-xs py-2 md:text-sm text-blue-600'>Terms of servicce and privacy policy<sup className='text-red-600'>*</sup></span>
            </div>
            <button className='bg-blue-400 p-2 my-3 rounded text-white'>Create Account</button>
          </div>
        </form>

        <div className=' font-semibold flex justify-center'>or</div>

        <section className='flex items-center flex-col '>
          <Link href=''>
            <div className='flex items-center border rounded py-2 px-4'>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g>
              </svg>
              <span className='px-2 '>Continue with Google</span>
            </div> </Link>
          <div className='border shadow  border-gray-300 m-5 w-4/5'></div>
          <div className=''>
            Already have an account? <Link href='/Register' className='underline text-blue-600 font-semibold'>Login</Link>
          </div>
        </section>
      </section>
    </main>
  )
}

export default register