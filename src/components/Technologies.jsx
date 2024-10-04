
import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb"
import { motion } from 'framer-motion'


function Technologies() {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div initial={{ y: -10, opacity: 0.3 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0 ,ease:'linear',repeat:Infinity,
                         repeatType:"reverse" 
                        }}  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className="text-7xl text-cyan-500"/>
        </motion.div>
        <motion.div initial={{ y: -10, opacity: 0.3 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 ,ease:'linear',repeat:Infinity,
                         repeatType:"reverse" 
                        }} className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandNodejs className="text-7xl "/>
        </motion.div>
        <motion.div initial={{ y: -10, opacity: 0.3 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 ,ease:'linear',repeat:Infinity,
                         repeatType:"reverse" 
                        }} className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div initial={{ y: -10, opacity: 0.3 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 ,ease:'linear',repeat:Infinity,
                         repeatType:"reverse" 
                        }} className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandNextjs className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div initial={{ y: -10, opacity: 0.3 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0 ,ease:'linear',repeat:Infinity,
                         repeatType:"reverse" 
                        }} className='rounded-2xl border-4 border-neutral-800 p-4'>
            <DiRedis className="text-7xl text-red-700"/>
        </motion.div>
        <motion.div initial={{ y: -10, opacity: 0.3 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 ,ease:'linear',repeat:Infinity,
                         repeatType:"reverse" 
                        }} className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoPostgresql className="text-7xl text-sky-700"/>
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies
