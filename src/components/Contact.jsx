import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Get In Touch</h1>
        <motion.div initial={{scale:0, opacity: 0}}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0 , 
                        }} className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="#" className='border-b'>{CONTACT.email}</a>
        </motion.div>
      
    </div>
  )
}

export default Contact
