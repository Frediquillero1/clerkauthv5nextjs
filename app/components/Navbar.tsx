import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const { userId } = auth()
  return (
    <div className='bg-[#403d76] rounded-b-xl'>
      <ul className='flex justify-between py-4 px-6'>
        <div>
          <Link href='/'>
            <li>HOME</li>
          </Link>
        </div>
        <div className='flex items-center'>
          <Link href='/client'>
            <li>CLIENT PAGE</li>
          </Link>
        </div>
        <div className='flex gap-6 items-center'>
          {!userId ? (
            <>
              <Link href='/sign-in'>
                <li>LOGIN</li>
              </Link>
              <Link href='/sign-up'>
                <li>SIGN UP</li>
              </Link>
            </>
          ) : (
            <>
              <Link href='/profile'>
                <li>PROFILE</li>
              </Link>
              <li className='flex items-center'>
                <UserButton />
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  )
}

export default Navbar
