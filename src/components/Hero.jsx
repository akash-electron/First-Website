import { HERO_CONTENT } from "../constants"
import { motion } from 'framer-motion'



function Hero() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className='flex flex-wrap'>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            initial={{x:-100 , opacity: 0}}
                            animate={{ opacity: 1, x:0 }}
                            transition={{ duration: 0.5 , delay:0 }}
                            className="text-6xl pb-16 font-thin tracking-tight lg:mt-16 lg:text-8xl">Akash Pandey</motion.h1>
                        <motion.span initial={{x:-100 , opacity: 0}}
                            animate={{ opacity: 1, x:0 }}
                            transition={{ duration: 0.5 , delay:0.5 }} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl text-transparent tracking-tight">
                            Full Stack Developer
                        </motion.span>
                        <motion.p initial={{x:-100 , opacity: 0}}
                            animate={{ opacity: 1, x:0 }}
                            transition={{ duration: 0.5 , delay:1 }} className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img initial={{x:100 , opacity: 0}}
                            animate={{ opacity: 1, x:0 }}
                            transition={{ duration: 1 , delay:1.2 }} className="h-96 w-84 rounded-xl" src="/ProfilePic2.jpg" alt="Profile-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
