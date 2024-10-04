import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

function Project() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl' >Projects</h1>
        <div>
            {PROJECTS.map((project , index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center' >
                    <motion.div initial={{ x: -100, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay:`0.${index+5} ` , 
                        }} className='w-full lg:w-1/4'>
                        <img src={project.image} alt={project.title}
                        height={150}
                        width={150}
                        className='mb-6 rounded'
                         />
                    </motion.div>
                    <motion.div initial={{ x: -100, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay:`0.${index+5} ` , 
                        }} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='font-semibold mb-2'>{project.title}</h6>
                    <p className='text-neutral-400 mb-4'>{project.description}</p>
                    {project.technologies.map((tech,index) =>(
                        <span className='text-sm bg-neutral-800 rounded px-2 py-1 mr-2 text-violet-500'>{tech}</span>
                    ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Project
