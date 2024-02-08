import React from 'react'
import Link from 'next/link'

function navabar() {
  return (
    <main>
        <nav className='flex md:justify-around shadow p-4 items-center '>
            <div className=''><img src="https://www.britwise.com/assets/imgs/logo.png" alt="" /></div>
            <div >
                <ul className='md:flex hidden md:space-x-10 md:items-center'>
                    <li>Services</li>
                    <li>Work</li>
                    <li>Company</li>
                    <Link href='/'><li>Login</li></Link>
                    <Link href='/Register'><li className='bg-red-500 rounded px-4 py-2 font-semibold text-white' >Register</li></Link>
                </ul>

            </div>
        </nav>
    </main>
  )
}

export default navabar