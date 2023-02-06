import React from 'react'
import {ImSpinner9} from 'react-icons/im'
import { motion} from 'framer-motion'

export const SuccessMsg = ({SuccessMsg}) => {
  return (
    <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate = {{ y: 0, opacity: 1 }}
    transition={{ y: {type: "spring", stiffness: 120} }}
    className='absolute shadow text-lg bottom-2 left-[40%] tracking-wide font-medium px-10 py-4 rounded-sm border-b-[6px] bg-slate-900 border-b-green-500 text-green-500 '>
        <p className='flex items-center  gap-4'> 
            <span className='animate-spin'> <ImSpinner9/> </span>
            {SuccessMsg}
        </p>
    
    </motion.div>
  )
}

export default SuccessMsg


