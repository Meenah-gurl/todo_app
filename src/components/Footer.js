import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { FiMail, FiSend} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className=' w-full'>
        <p className='text-center text-sm text-gray-400'>Get inspiration from thousands of community-made templates, integrations,</p>
        <div className='flex flex-items justify-center items-center gap-2 mt-3'>
            <span>
                <FaGithub/>
            </span>
            <span>
                <FaLinkedin/>
            </span>
            <span>
                <FaYoutube/>
            </span>
            <span>
                <FaInstagram/>
            </span>
            <span>
                <FaFacebookF/>
            </span>
            <span>
                <FaTwitter/>
            </span>
            <span>
                <FiMail/>
            </span>
            <span>
                <FiSend/>
            </span>
        </div>
    </div>
    
  )
}

export default Footer