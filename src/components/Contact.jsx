import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 0.5}}
        className='my-7 text-center w-full'>Contact me</motion.h2>
        
        <div className='text-center transparent tracking-tighter'>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial= {{opacity:0, x: -100}}
            transition={{duration: 1}}
            className='my-4'>+91 9755004261</motion.p>
            
            <motion.a 
            whileInView={{opacity:1, x:0}}
            initial= {{opacity:0, x: -100}}
            transition={{duration: 1}}
            href="#" className='border-b'>nandigramamsairohit@gmail.com</motion.a>
        </div>
    </div>
  )
}

export default Contact