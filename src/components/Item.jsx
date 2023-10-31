import React, { useContext } from 'react'
import { AiOutlineClose, AiOutlineMinus } from 'react-icons/ai'
import { GrAdd } from 'react-icons/gr'
import { CartContext } from './contexts/CartContext'
const Item = ({ item }) => {

    const {removeCart,increaseAmount,decreaseAmount} = useContext(CartContext)
    
    const { id, image, title, price, amount } = item

    return (
        <>

            <div>
                <div className='flex border-b '>
                    <img className='max-w-[120px]' src={image} alt="" />

                    <div className='w-full '>
                        <div className='flex justify-between w-full mt-5'>
                            <p>{title}</p>
                            <div onClick={()=>removeCart(id)} className='mr-5 hover:text-red-500 transition-all duration-300 cursor-pointer'><AiOutlineClose /></div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex w-20 cursor-pointer border py-1 px-2 mt-3 justify-between items-center'>
                                <div onClick={()=>decreaseAmount(id)}><AiOutlineMinus /></div>
                                <div>{amount}</div>
                                <div onClick={() =>increaseAmount(id)}><GrAdd /></div>
                            </div>
                            <div>$ {price}</div>
                            <div className='mr-5 text-sm text-gray-500'>$ {`${parseFloat(price * amount).toFixed(2)}`}</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Item