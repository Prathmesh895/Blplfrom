import React from 'react'
import Link from 'next/link'

function login() {
  return (
    <div className='flex flex-col justify-center  m-5  md:mx-auto md:my-10 md:w-1/3 border-gray-200 rounded-2xl border shadow'>
      <div className='my-8 font-semibold text-2xl flex justify-center'>Welcome back</div>
      <form className='mx-3 ' action="">
        <label htmlFor="email" >Your email address <sup className='text-red-600'>*</sup></label><br />
        <input className='border w-full  rounded-t p-1 mb-3' type="email" placeholder='Your email address ' required /><br />
        <label htmlFor="">Your password <sup className='text-red-600'>*</sup> </label>
        <input className='border w-full  rounded-b p-1 mb-4' type="password" placeholder='Your password ' required />
        <div className='flex justify-between text-sm'>
          <div><input className='' type="checkbox" /> Reminder me</div>
          <Link className='text-blue-600 font-semibold underline' href=''>Forgot your password?</Link>
        </div>
        <button className='bg-blue-300 w-full rounded p-1.5 my-5 text-white'>Login</button>
      </form>
      <div className=' font-semibold flex justify-center'>or</div>

      <section className='flex items-center flex-col my-5'>
        <Link href=''>
          <div className='flex items-center border rounded py-2 px-4'>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g>
            </svg>
            <span className='px-2 '>Continue with Google</span>
          </div> </Link>
        <div className='border-b border-gray-300 m-5 w-full'></div>
        <div className=''>
          New to Britwise Technology? <Link href='/register' className='underline text-blue-600 font-semibold'>Sign up</Link>
        </div>
      </section>

    </div>
  )
}

export default login