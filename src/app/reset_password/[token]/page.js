'use client'
import React from 'react'
import { useState } from 'react'
import { CiLock } from 'react-icons/ci'
const page = () => {
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(password)
  }
  return (
    <div className='flex  justify-center items-center w-full h-full py-5 bg-light_gray'>
      <div className='flex justify-center text-center  bg-white w-[80%] h-80 md:w-[60%] rounded-md shadow-md md:h-96'>
        <div>
          <CiLock className='size-20 md:size-32 m-auto mt-6 text-red' />
          <h1 className='text-2xl mt-4 font-semibold text-blue'>
            Reset Password
          </h1>
          <div className='mt-4'>
            <input
              className='bg-light_gray text-gray focus:outline-none focus:shadow-outline border border-gray rounded py-2 px-6 md:px-8 block w-full appearance-none'
              type='password'
              name='password'
              placeholder='New Password'
              onChange={(e) =>
                setPassword({ ...password, password: e.target.value })
              }
            />
          </div>
          <button
            onClick={handleSubmit}
            className='bg-blue hover:bg-green mt-5 py-2 px-8 w-full rounded-md text-white '
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default page