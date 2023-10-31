import React, { createContext, useEffect, useState } from 'react'
import Item from '../Item';

export const CartContext = createContext();
const CartProvider = ({children }) => {

    //add to cart

    

    const [cart, setCart] = useState([])
    //condition1

    // const addTocart = (product, id) => {
    //     console.log(`${product, id} Cart`);
    // }
    
    //condition 2 add to product
    // const addTocart = (product, id) => {

    //     const newItem = {...product, amount: 1}
    //     console.log(newItem)
    // }
    //condition 3 add to all

    const addTocart = (product, id) => {
        const newItem = {...product, amount: 1};
        const cartItem = cart.find((item) => {
            return item.id === id
        });

        if(cartItem){
            const newCart = [...cart].map(item =>{
                if(item.id === id){
                    return {...item, amount: cartItem.amount + 1};
                }else{
                    return item;
                }
            });
            setCart(newCart);
        }else{
            setCart([...cart, newItem])
        }
    }
    //end of add to  cart

    // remove cart  
    const removeCart = (id) => {

        const newCart = cart.filter((item) => {
            return item.id !== id
        })

        setCart(newCart)
    }

    //end of reamove cart

    //increase amount item 0

    const [itemAmount, setItemAmount] = useState(0)
    
    useEffect(()=>{
        if(cart){
            const amount = cart.reduce((calAmount, currentItem) => {
                return calAmount + currentItem.amount;
            }, 0)

            setItemAmount(amount)
        }
    })

    // end of increate amount item 0

    // increase amount item

    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addTocart(cartItem, id)
    }
    // end of incrase amount item

    // decrease amount item

    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id
        });

        if(cartItem){
            const newCartMinusAmount = cart.map((item) => {
                if(item.id === id){
                    return {...item, amount: cartItem.amount - 1};
                }else{
                    return item;
                }
            });

            setCart(newCartMinusAmount)
        }

        if(cartItem.amount < 2){
            //removeCart(id)
            removeCart(false)
        }
    }
    // end of decrease amount


    // clear all data

    const clearAllCart = () => {
        setCart([])
    }

    //end of cleaall cart

    // calucate all total amount
    const [allTotal, setAllTotal] = useState(0)
    useEffect(()=>{
        const allTotal = cart.reduce((calAllCart, currentItem) => {
            return calAllCart + currentItem.price * currentItem.amount;
        }, 0);

        setAllTotal(allTotal)
    })
    //end of all toal

    //pay for tax
    const [tax, setTax] = useState(0)
    useEffect(() => {
        const tax = cart.reduce((calTax, currentTax) => {
            return calTax + currentTax.price * currentTax.amount/100 + 1;
        }, 0);

        setTax(tax)
    })
    // end of pay for tax

    // for grand total
    const [grandtotal, setGrandTotal] = useState(0)
    useEffect(()=> {
        const grandtotal = allTotal + tax;
        setGrandTotal(grandtotal)
    })

    // end of for grand total


  return (
    <CartContext.Provider value={{ cart, setCart, addTocart, removeCart,itemAmount,setItemAmount,increaseAmount, decreaseAmount,clearAllCart,allTotal, tax, setTax,grandtotal }}>{children}</CartContext.Provider>
  )
}

export default CartProvider