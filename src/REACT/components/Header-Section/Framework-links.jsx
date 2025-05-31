import React from 'react'

export const FrameworkLinks = () => {
  return (
<div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
    <a href="/" className="transition hover:opacity-100 opacity-50">
        <img
        src="/Vue.-icon.svg.png"
        alt="Vue Logo"
        className="
        hover:drop-shadow-[0_0_8px_rgba(66,184,131,0.7)]
         w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
        "
        />
    </a>
        <img
        src="/React-icon.svg.png"
        alt="React Logo"
        className="
          drop-shadow-[0_0_8px_rgba(97,218,251,0.7)] 
          w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        />
  </div>
  )
}
