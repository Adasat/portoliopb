import React from 'react'

export const ProjectCard = ({project}) => {
  return (
     <div className='flex flex-col gap-4 w-full md:w-1/2'>
        <div className='flex flex-col gap-4'>
            <h3 className='text-4xl md:text-6xl font-bold font-spaceGrotesk'>{project.title}</h3>
            <p className='text-lg font-ibmPlexSans font-light'>{project.description}</p>
        </div>
    </div>
  )
}
