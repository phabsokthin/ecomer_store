import React, { useContext, useEffect, useState } from 'react'

import { FetchItemBar } from '../json/ItemBar'
import { AiFillShopping, AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import MobileNav from './MobileNav'
import Slider from './Slider'
import { SideBarContext } from './contexts/SidebarContext'
import { CartContext } from './contexts/CartContext'
import logins from './SlideCard/undraw_Metrics_re_6g90.png'


const Navigation = () => {

    const [nav, setNav] = useState(false)

    const [mobile, setMobile] = useState(false)

    //use context 


    const { isOpen, setIsOpen } = useContext(SideBarContext)

    //cart context item increase amount 0

    const { itemAmount } = useContext(CartContext)

    //for navbar scroll

    //for modal user

    const [login, setLogin] = useState(false)
    const closeLogin = () => {
        setLogin(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 30 ? setNav(true) : setNav(false)
        })
    })


    return (
        <>

            <div className={`${nav ? 'shadow-md bg-white' : 'shadow bg-white'} z-10 fixed w-full py-5 font-monster`}>
                <div className='container mx-auto'>
                    <div>
                        <div className='flex justify-end px-3 lg:hidden'>
                            <div className='flex gap-x-2 cursor-pointer'>
                                <div onClick={() => setLogin(!login)} className="h-8 w-8 hover:bg-gray-200 transition-all duration-300 ease-in-out shadow flex justify-center items-center rounded-full">
                                    <AiOutlineUser />
                                </div>
                                <div onClick={() => setIsOpen(!isOpen)} className="h-8 w-8 hover:bg-gray-500 duration-300 ease-in-out shadow flex justify-center items-center rounded-full relative">
                                    <AiFillShopping />
                                    <div className='absolute -top-2 right-0 w-4 h-4 bg-red-500 flex justify-center items-center rounded-full'>
                                        <p className='text-white text-sm'>{itemAmount}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <nav className='flex justify-between items-center'>
                        <a href="/" className='text-2xl font-bold pl-3'>ElECTRONIC<span className='text-red-500'>SHOP</span></a>
                        <ul className='hidden md:hidden lg:flex gap-x-10 items-center'>
                            {FetchItemBar.map((item, index) => {
                                return (

                                    <li key={index}>
                                        <a href={item.href} className='hover:text-red-500 transtion-all duration-300'>{item.names}</a>
                                    </li>
                                )
                            })}
                            <div className='flex gap-x-2 cursor-pointer'>
                                <div onClick={() => setLogin(!login)} className="h-12 w-12 shadow  hover:bg-gray-200 transition-all duration-300 ease-in-out flex justify-center items-center rounded-full">
                                    <AiOutlineUser />
                                </div>
                                <div onClick={() => setIsOpen(!isOpen)} className="h-12 w-12 shadow flex justify-center items-center rounded-full relative">
                                    <AiFillShopping />
                                    <div className='absolute -top-2 right-0 w-6 h-6 bg-red-500 flex justify-center items-center rounded-full'>
                                        <p className='text-white'>{itemAmount}</p>
                                    </div>
                                </div>
                            </div>
                        </ul>
                        <div onClick={() => setMobile(!mobile)} className='lg:hidden p-4 cursor-pointer text-2xl transition-all duration-300'>
                            {mobile ? <AiOutlineClose /> : <AiOutlineMenu />}
                        </div>
                    </nav>
                    <div className={`${mobile ? "left-0" : "-left-full"} fixed z-10 h-full bg-white shadow-2xl top-0 w-[50%] space-y-10 lg:hidden transition-all duration-300`}>
                        <MobileNav />
                    </div>
                </div>
            </div>

            {/* for page user */}
            <div className={`${login ? 'w-full' : '-top-full'} flex justify-center h-full w-full bg-black/25 z-10 fixed`}>
                <div className={`${login ? 'top-20' : '-top-full'} w-[80%] sm:w-[60%] md:w-[50%]  lg:w-[30%] h-[550px] bg-white shadow-xl rounded-lg z-10 fixed   flex transition-all duration-500 ease-in-out`}>
                    <div className='w-full h-full  justify-center items-center'>
                        <div className='flex justify-center items-center mt-5'>
                            <img src={logins} className='w-[250px]' alt="" />
                        </div>
                        <div className='p-10 mt-[0%]'>
                        <form>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="email" id="email" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required/>
                            </div>
                            <div class="mb-6 ">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="email" id="email" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required/>
                            </div>
                      
                            <div class="flex items-start mb-6">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                                </div>
                                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                           <div className='space-x-3 w-full flex '>
                           <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            <button onClick={() => setLogin()}  class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-red-800">Close</button>
                           </div>
                        </form>
                        </div>
                    </div>

                   
                </div>
            </div>

            <Slider />

        </>
    )
}

export default Navigation