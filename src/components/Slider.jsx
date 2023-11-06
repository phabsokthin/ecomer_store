import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { HiOutlineArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import { BsShopWindow } from 'react-icons/bs'
import { BiHeadphone } from 'react-icons/bi'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slider1 from './SlideCard/slide-1.png'
import slider2 from './SlideCard/headphone_blue.png'
import slider3 from './SlideCard/airpods.png'
import slider4 from './SlideCard/watch.png'
import { fetchElectronic, fetchImage, fetchImageShop, fetchOne, fetchOne1, fetchOne2, fetchOne3, fetchOne4, fetchOne5, fetchOne6, fetchOne7, fetchOne8 } from '../json/Json';
import CardItem from './CardItem';
import Item from './Item';
import Category1 from './top/category-1.png'
import Category2 from './top/category-2.png'
import Category3 from './top/category-3.png'
import Electronic from './Electronic';
import OneImage from './OneImage';
import TvCart from './TvCart';
import Footer from './Footer';


const Slider = () => {
    return (
        <>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl: ".button-next-slide",
                    prevEl: ".button-prev-slide"
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

                className='relative group mt-[]'

            >
                <SwiperSlide className='cursor-pointer mt-[100px]'>
                    <div className='flex justify-center items-center font-monster'>
                        <div className='w-[100%] md:w-[50%] lg:w-[40%] p-4 space-y-3 mt-[-3rem]'>
                            <p className='text-sm text-gray-500'>HOTPRODUCT</p>
                            <h1 className='text-2xl md:text-5xl '>FILL YOUR DESK FULL OF TECHNOLOGY.</h1>

                            <button className='bg-orange-400 text-white cursor-pointer ease-in-out duration-300 hover:bg-orange-500 px-3 p-2'>Check Out</button>
                        </div>
                        <div className=''>
                            <img className='mt-10 ' src={slider1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='cursor-pointer mt-[100px]'>
                    <div className='flex justify-center items-center font-monster'>
                        <div className='w-[100%] md:w-[40%] p-4 space-y-3 mt-[-3rem]'>
                            <p className='text-sm text-gray-500'>HOTPRODUCT</p>
                            <h1 className='text-2xl md:text-5xl '>HEAD PHONE BEST FOR GAMMER.</h1>

                            <button className='bg-orange-400 text-white cursor-pointer ease-in-out duration-300 hover:bg-orange-500 px-3 p-2'>Check Out</button>
                        </div>
                        <div className=''>
                            <img className='mt-10 w-[400px]' src={slider2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='cursor-pointer mt-[100px]'>
                    <div className='flex justify-center items-center font-monster'>
                        <div className='w-[100%] md:w-[40%] p-4 space-y-3 mt-[-3rem]'>
                            <p className='text-sm text-gray-500'>HOTPRODUCT</p>
                            <h1 className='text-2xl md:text-5xl'>BEST AIRPORT MADE FROM UK.</h1>

                            <button className='bg-orange-400 text-white cursor-pointer ease-in-out duration-300 hover:bg-orange-500 px-3 p-2'>Check Out</button>
                        </div>
                        <div className=''>
                            <img className='mt-10  w-[400px]' src={slider3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='cursor-pointer mt-[100px]'>
                    <div className='flex justify-center items-center font-monster'>
                        <div className='w-[100%] md:w-[50%] lg:w-[40%] p-4 space-y-3 mt-[-3rem]'>
                            <p className='text-sm text-gray-500 mt-5'>HOTPRODUCT</p>
                            <h1 className=' text-2xl md:text-5xl '>BLACK WATCH BEST TEACHNOLOGY FORM USA.</h1>

                            <button className='bg-orange-400 text-white cursor-pointer ease-in-out duration-300 hover:bg-orange-500 px-3 p-2'>Check Out</button>
                        </div>
                        <div className=''>
                            <img className='mt-10  w-[400px]' src={slider4} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <div className='button-prev-slide absolute top-[50%] -left-[50rem] group-hover:left-0 transtion-all duration-300 ease-in-out bg-gray-500 z-10 fixed w-8 h-8 flex justify-center items-center text-white'>
                    <HiOutlineArrowLongLeft />
                </div>
                <div className='button-next-slide absolute top-[50%] -right-[50rem] group-hover:right-0 transtion-all duration-300 ease-in-out bg-gray-500 z-10 fixed w-8 h-8 flex justify-center items-center text-white'>
                    <HiArrowLongRight />
                </div>
            </Swiper>

            <div className="container mx-auto font-monster text-sm">
                <div className='grid grid-cols-2 max-w-sm mx-auto sm:max-w-none sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-10 cursor-pointer'>
                    {fetchImage.map((item, index) => {
                        return (
                            <div key={index} className='shadow py-5 mt-10 '>
                                <div className='flex justify-center '>
                                    <img className='w-[40px] flex justify-center' src={item.image} alt="" />
                                </div>
                                <div className='text-center'>{item.title}</div>
                            </div>
                        )
                    })}
                </div>


                <div className='my-10 text-2xl flex gap-x-2 font-bold'>
                    <BsShopWindow />
                    <p className=''>Product</p>
                </div>

                <div className='px-10'>
                    <div className='grid grid-cols-2 space-y-5 md:space-y-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                        {fetchImageShop.map((product, index) => {
                            return <CardItem product={product} key={index} />
                        })}
                    </div>
                </div>
            </div>


            <div className="container font-monster mx-auto mt-10">
                <div className="grid space-y-2 sm:space-y-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-x-2">
                    <div className=''>
                        <img className='w-[500px]' src={Category1} alt="" />
                    </div>
                    <div>
                        <img className='w-[500px]' src={Category2} alt="" />
                    </div>
                    <div>
                        <img className='w-[500px]' src={Category3} alt="" />
                    </div>
                </div>


                <div className='my-10 text-2xl flex gap-x-2 font-bold'>
                    <BiHeadphone className='text-3xl' />
                    <p>ELECTRONIC & SMARTPHONE</p>
                </div>

                <div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 sm:max-w-none lg:grid-cols-5 max-w-sm mx-auto '>
                        {fetchElectronic.map((electronics, index) => {
                            return (
                                <div key={index}>
                                    <Electronic electronic={electronics} key={electronics.id} />
                                </div>
                            )
                        })}
                    </div>
                </div>


            </div>

            <section className='bg-green-700 mt-10 p-5'>
                <div className="container mx-auto w-full">
                   
                    <div class="relative flex justify-center w-full%]">
                        
                        <div class="absolute left-[12%] left-16  inset-y-0 sm:left-[18%] flex md:left-[19%]  items-center xl:left-[18%] pl-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name12@gmail.com"/>
                        <button type="submit" class="text-white ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[] lg:w-[200px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>

                </div>
            </section>

            <div className="container mx-auto font-monster">

            <div className='my-10 text-2xl flex gap-x-2 font-bold'>
                    <BiHeadphone className='text-3xl' />
                    <p>SPACIAL CATEGORY</p>
                </div>

                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation={{
                        nextEl: ".button-next-slide",
                        prevEl: ".button-prev-slide"
                    }}
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                        1220: {
                            slidesPerView: 6,
                            spaceBetween: 50,
                        },
                    }}

                    className='relative'
                >
                    <SwiperSlide>

                        {fetchOne.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>
                    <SwiperSlide>

                        {fetchOne1.map((tvItem) => {
                            return <TvCart tvItem={tvItem} key={tvItem.id} />
                        })}

                    </SwiperSlide>
                    <SwiperSlide>

                        {fetchOne2.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>
                    <SwiperSlide>

                        {fetchOne3.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>
                    <SwiperSlide>

                        {fetchOne4.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>
                    <SwiperSlide>

                        {fetchOne5.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>
                    <SwiperSlide>

                        {fetchOne6.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>
                    <SwiperSlide>

                        {fetchOne7.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>
                    <SwiperSlide>

                        {fetchOne8.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>



                    <div className='button-prev-slide absolute top-[50%] flex justify-center items-center hover:bg-gray-200  rounded-full bg-white shadow h-8 text-sm cursor-pointer transtion-all duration-300 ease-in-out w-8 z-10'>
                        <FaChevronLeft />
                    </div>
                    <div className='button-next-slide absolute top-[50%] right-0 flex justify-center items-center hover:bg-gray-200  rounded-full bg-white shadow h-8 text-sm cursor-pointer transtion-all duration-300 ease-in-out w-8 z-10'>
                        <FaChevronRight />
                    </div>

                </Swiper>
            </div>

           


            <Footer/>


        </>
    )
}

export default Slider