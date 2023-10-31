import React from 'react'
import { FetchItemBar } from '../json/ItemBar'

const MobileNav = () => {
  return (
    <>
    
        <div>
            <nav className='p-10 '>
                <ul className='space-y-4'>
                    {FetchItemBar.map((item, index) => {
                        return(
                            <li key={index}>
                                <a href={item.href} className='hover:text-red-500 transition-all duration-300'>{item.names}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    
    </>
  )
}

export default MobileNav