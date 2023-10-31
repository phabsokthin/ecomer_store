import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { HiOutlineArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import { BsShopWindow } from 'react-icons/bs'
import { BiHeadphone } from 'react-icons/bi'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slider1 from './SlideCard/slide-1.png'
import slider2 from './SlideCard/headphone_blue.png'
import slider3 from './SlideCard/airpods.png'
import slider4 from './SlideCard/watch.png'
import { fetchElectronic, fetchImage, fetchImageShop, fetchOne } from '../json/Json';
import CardItem from './CardItem';
import Item from './Item';
import Category1 from './top/category-1.png'
import Category2 from './top/category-2.png'
import Category3 from './top/category-3.png'
import Electronic from './Electronic';
import OneImage from './OneImage';


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

                className='relative group'

            >
                <SwiperSlide className='cursor-pointer'>
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
                <SwiperSlide className='cursor-pointer'>
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
                <SwiperSlide className='cursor-pointer'>
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
                <SwiperSlide className='cursor-pointer'>
                    <div className='flex justify-center items-center font-monster'>
                        <div className='w-[100%] md:w-[50%] lg:w-[40%] p-4 space-y-3 mt-[-3rem]'>
                            <p className='text-sm text-gray-500'>HOTPRODUCT</p>
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


                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>

                        {fetchOne.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>
                    <SwiperSlide>

                        {fetchOne.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>
                    <SwiperSlide>

                        {fetchOne.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>
                    <SwiperSlide>

                        {fetchOne.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>
                    <SwiperSlide>

                        {fetchOne.map((oneImage) => {
                            return (
                                <OneImage oneImage={oneImage} key={oneImage.id} />
                            )
                        })}

                    </SwiperSlide>
                    ...
                </Swiper>

            </div>


        </>
    )
}

export default Slider