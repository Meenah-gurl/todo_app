import React, { useState } from 'react'
import {MdDelete} from 'react-icons/md'
import Footer from './Footer'

const TodoList = () => {
    const [mark, setMark] = useState(false)
  return (
   <li onClick={() => setMark(!mark)} className={'${mark ? "border-l-orange-500 border-orange-500" : "border-l-green-500 border-green-500" } w-full font-medium text-base border-[1px] border-l-[6px] px-2 py-1 cursor-pointer  flex items-center justify-between'}>
    
     Todo Items 
     <span className='flex flex-col text-xl text-gray-300 hover:text-red-500 duration cursor-pointer'>
        <MdDelete/>
     </span>
    </li>
    
  )
}

export default TodoList