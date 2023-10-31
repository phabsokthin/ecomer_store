import React, { createContext, useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { SideBarContext } from './contexts/SidebarContext'
import Item from './Item'
import { fetchImageShop } from '../json/Json'
import { CartContext } from './contexts/CartContext'

import { AiFillDelete } from 'react-icons/ai'
import emptyCart from './SlideCard/undraw_empty_cart_co35.png'



const SidebarCart = () => {


    const { cart, itemAmount, clearAllCart, allTotal, tax, grandtotal } = useContext(CartContext)

    const { isOpen, handleClose } = useContext(SideBarContext)

    return (
        <>
            <div className={`${isOpen ? "w-full" : "-right-full"} font-monster bg-black/30 w-full h-full fixed z-10 top-0 transition-all duration-500 ease-in-out`}>
                <div className={`${isOpen ? "right-0" : "-right-full"} w-full h-full fixed z-50 top-0 bg-white md:w-[45%] lg:w-[30%] xl:w-[25%] shadow-xl transition-all duration-300 ease-in-out`}>
                    <div className='bg-blue-500 py-5 p-5 flex justify-between items-center text-white'>
                        <p>MY CART IS ({itemAmount})</p>
                        <div onClick={() => handleClose()} className='cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out'>
                            <AiOutlineClose />
                        </div>
                    </div>

                    <div className="h-[50%] relative ">


                        <div className='h-[430px] overflow-hidden overflow-y-auto'>

                            {cart.map(item => {
                                return <Item item={item} key={item.id} />
                            })}         

                 

                        </div>
                        {/* for cart is empty */}

                        <div className="flex justify-center items-center">
                            <div className='flex justify-center items-center top-20 absolute '>
                                {cart.length > 0 ? (
                                    <></>
                                ) : (

                                    <>

                                        <div className='text-center'>
                                            <img className='max-w-[200px]' src={emptyCart} alt="" />

                                            <div className='text-sm text-gray-500 mt-2'>Your add is empty</div>

                                        </div>

                                    </>
                                )}
                            </div>
                        </div>

                    </div>



                    <div className='p-5 border-t'>
                        <div className='flex justify-between  items-center'>
                            <div>Total: $ {`${parseFloat(allTotal).toFixed(2)}`}</div>
                            <div onClick={() => clearAllCart()} className='w-10  h-10 bg-red-500 cursor-pointer hover:bg-red-600 transition-all duration-300 ease-in-out flex justify-center items-center text-white rounded-full text-sm'><AiFillDelete /></div>
                        </div>

                        <div>Tax: $ {`${parseFloat(tax).toFixed(2)}`} </div>
                        <div className='mt-2'>Fee: $ 0.00</div>
                        <div className='mt-2'>GrandTotal: $ {`${parseFloat(grandtotal).toFixed(2)}`}</div>
                        <div className='flex justify-center mt-3'>

                            <a href={`/`} className="bg-orange-500 w-full flex justify-center py-4 text-white hover:bg-orange-600 transition-all duration-300 ease-in-out "  >Check Out</a>
                            
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}

export default SidebarCart