import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='text-sm text-center bg-gray-50 py-4'>
            © Copyright 2024 | Designed & Developed By: <a href='https://leetcode.com/u/maneesh369/' className='font-bold' target='_blank' >Maneesh Rawat</a>
            <div className='flex justify-center gap-4 mt-2'>
                <a href='https://www.linkedin.com/in/maneesh-rawat-461a76251' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={20} className='text-blue-600 hover:text-blue-800' />
                </a>
                <a href='https://github.com/maneeshcoder' target='_blank' rel='noopener noreferrer'>
                    <FaGithub size={20} className='text-gray-800 hover:text-gray-900' />
                </a>
                <a href='https://www.instagram.com/accounts/login/?hl=en' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram size={20} className='text-pink-500 hover:text-pink-700' />
                </a>
            </div>
        </div>
    )
}

export default Footer