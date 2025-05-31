// src/components/Header.jsx o .tsx

import React from 'react'
import { FrameworkLinks } from './Framework-links'
import { SocialLinks } from './SocialLinks'
export const Header = () => {


  
  return (
    <div className="
      flex w-full justify-between items-center
      pl-8 sm:pl-12 md:pl-16  py-8 md:py-12 
    ">
      <img src="/Logo.png" alt="Logo" className='w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24'/>

      <div className="
        flex  justify-between items-center
        gap-10 sm:gap-16 md:gap-20 
        bg-black text-color-background-react 
        px-8 sm:px-12 md:px-16 py-8"
      >
        <FrameworkLinks />
        <div className='hidden sm:block'>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}
