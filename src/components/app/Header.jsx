import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { CgProfile } from 'react-icons/cg'
import { IoIosCart } from 'react-icons/io'
import MenuDropdown from '../ui/MenuDropdown'
import ShopDropdown from '../ui/ShopDropdown'

const Header = () => {
  return (
    <div>
      {/* *******1******* */}
      <div className='bg-orange'>
        <div className='h-14 px-10 flex justify-between items-center text-white'>
          <h1>
            Get 20% <span className='font-semibold'>Flat Discount</span> on Your
            First Order
          </h1>
          <div className='flex gap-2'>
            <h1>Login</h1>
            <p className='text-gray'>Or</p>
            <h1>Registration</h1>
          </div>
        </div>
      </div>
      {/* ********2********* */}
      <div className='flex bg-white px-10 justify-between h-20 py-2 items-center'>
        <div className='flex items-center gap-1'>
          <Image src={logo} width={50} height={50} alt='logo' />
          <h1 className='text-lg'>
            <span className='font-bold'> Meta</span>Shop
          </h1>
        </div>
        {/*Search-box*/}
        <div>
          <div className=' md:w-96'>
            <div className='relative  flex w-full flex-wrap items-stretch'>
              <input
                type='search'
                className='relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-full  border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='button-addon1'
              />

              {/* <!--Search button--> */}

              <button
                className='relative z-[2] flex items-center rounded-r-full  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white bg-black hover:bg-orange shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg'
                type='button'
                id='button-addon1'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* *****cart*** */}
        <div className='flex items-center gap-6'>
          <CgProfile className='w-8 h-8' />
          <div className='flex gap-3 items-center bg-light_gray p-2 rounded-lg'>
            <IoIosCart className='w-6 h-6' />
            <div className=''>
              <div className='flex justify-center items-center bg-orange  text-white rounded-full  h-4 w-8'>
                0
              </div>
              <p>My Cart</p>
            </div>
          </div>
        </div>
      </div>
      <hr className='text-light_gray'></hr>
      {/* ************3******* */}
      <div className='flex px-10 justify-between items-center h-12'>
        <div>
          <MenuDropdown />
        </div>
        {/* ******li-item****** */}
        <div className='flex'>
          <ul className='flex gap-6 text-light_black '>
            <li className='hover:text-orange'>HOME</li>
            <li className=''>
              <ShopDropdown />
            </li>
            <li className='hover:text-orange'>SPECIAL OFFER</li>
            <li className='hover:text-orange'>NEW ARRIVALS</li>
            <li className='hover:text-orange'>ABOUT US</li>
            <li className='hover:text-orange'>BLOG</li>
            <li className='hover:text-orange'>FAQS</li>
            <li className='hover:text-orange'>CONTACT US</li>
          </ul>
        </div>
        {/* ******* */}
        <div className='text-light_black hover:text-orange'>
          <h1>Need Help? Contact Us</h1>
        </div>
      </div>
    </div>
  )
}
export default Header
