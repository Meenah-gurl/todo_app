import React from 'react'
import {ImSpinner9} from 'react-icons/im'
import { motion} from 'framer-motion'



const ErrMsg = ({errMsg}) => {
  return (
    <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate = {{ y: 0, opacity: 1 }}
    transition={{ y: {type: "spring", stiffness: 120} }}
    className='absolute shadow text-lg top-2 left-[40%] tracking-wide font-medium px-10 py-4 rounded-sm border-b-[6px] bg-slate-900 border-b-red-500 text-red-500 '>
        <p className='flex items-center  gap-4'> 
            <span className='animate-spin'> <ImSpinner9/> </span>
            {errMsg}
        </p>
    
    </motion.div>
  )
}

export default ErrMsg