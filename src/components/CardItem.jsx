import React, { useContext } from 'react'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'
import {CiShoppingBasket} from 'react-icons/ci'
import {BsEye} from 'react-icons/bs'
import { CartContext } from './contexts/CartContext'

// for alert. react-hot-toast
import toast from 'react-hot-toast';

const notify = () => toast.success('Add to cart!')



const CardItem = ({ product }) => {


    const {addTocart} = useContext(CartContext)

    const { id, image, title, price, amount, discount } = product

    return (
        <>

            <div className='w-full h-full'>
                <div className='relative group overflow-hidden'>
                    <img src={image} className='w-[100%] group-hover:scale-110 cursor-pointer transition-all duration-300' alt="" />
                    <div className='text-center'>
                        <p>{title}</p>
                        <p>{price}</p>
                    </div>
                    <div className='absolute top-0 bg-red-500 px-2 text-white rounded-md'>
                        <p>{discount}</p>
                    </div>
                    <div className='flex text-orange-500 justify-center'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar/>
                    </div>
                    <div onClick={notify} className='absolute mt-5 top-0  -right-40 group-hover:right-10 transition-all duration-300 ease-in-out flex flex-col space-y-2  bg-white/90 shadow px-3 h-20 '>
                        <button onClick={()=>addTocart(product, id)}  className='mt-4'>
                            <CiShoppingBasket className='text-[25px] hover:text-red-500'/>                    
                        </button>
                        <button  className='ml-1'>
                            <BsEye className='text-[20px] hover:text-red-500'/>
                        </button>
                    </div>
             
                </div>
            </div>

        </>
    )
}

export default CardItem