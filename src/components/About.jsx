import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'


function About() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <h1 className='my-20 text-4xl text-center'>About
                <span className='text-neutral-500'> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0 }} className="flex items-center justify-center">
                        <img className='w-80 rounded-xl' src="/ProfilePic.jpg" alt="AboutImg" />
                    </motion.div>
                </div>
                <motion.div initial={{ x: 100, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0 }} className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
