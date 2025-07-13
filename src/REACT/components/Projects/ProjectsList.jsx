import React from 'react'
import { motion } from 'framer-motion'

export const ProjectsList = () => {
  return (
    <motion.div
      className='
        margin-react py-12 mt-8
        flex flex-col md:flex-row gap-8 md:gap-12
      '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
        <h3 className='text-4xl md:text-6xl font-bold font-spaceGrotesk'>Projects</h3>

        <div className='flex flex-col gap-4 w-full md:w-1/2'>
            
        </div>
    </motion.div>
  )
}
