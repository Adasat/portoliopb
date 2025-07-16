import React, { useEffect, useState } from 'react'
import { Header } from './Header-Section/Header'
import { motion } from 'framer-motion'
import '../../styles/global.css'
import { SocialLinks } from './Header-Section/SocialLinks'
import useI18n from '../../hooks/useI18n'
import { initI18n } from '../../i18n'

const HeroReact = ({ initialLocale, initialMessages }) => {
  const [ready, setReady] = useState(false);

  const { t } = useI18n();

  useEffect(() => {
    initI18n(initialLocale, initialMessages).then(() => setReady(true));
  }, [initialLocale, initialMessages]);

  /* 3️⃣  Hasta que esté listo, renderiza un placeholder ligero */
  if (!ready) {
    return (
      <div className="flex w-full flex-col animate-pulse min-h-[500px] p-8">
        <div className="h-12 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="h-24 bg-gray-200 rounded w-2/3 mb-8" />
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-4" />
        <div className="h-6 bg-gray-200 rounded w-1/2" />
      </div>
    );
  }

  return (
    <div className='flex w-full flex-col'>
      <Header />
      <div className='relative flex flex-col sm:flex-row sm:items-center sm:justify-between min-h-[500px] pl-8 sm:pl-12 md:pl-16  sm:relative'>
        <div className='flex flex-col gap-4 mt-8'>
        <motion.h1
          className="text-start text-6xl md:text-8xl lg:text-[150px] font-bold font-spaceGrotesk text-primaryReact  leading-[0.9]"
          initial={{ opacity: 0, y: 30 }}  
          animate={{ opacity: 1, y: 0 }}    
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {t('firstName')} <br /> {t('lastName')}
        </motion.h1>
        <motion.div
          className=" font-bold font-spaceGrotesk text-end"
          style={{ transformOrigin: 'center' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
        </motion.div>
        </div>

        <div className="
           right-0 sm:absolute sm:right-4 
           mt-20 sm:mt-0 p-8 py-12 
           sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:-rotate-90  
          rounded-l-lg md:rounded-none">
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <p 
            className="
            text-xl md:text-2xl lg:text-4xl 
            text-center sm:text-start
            font-bold font-spaceGrotesk whitespace-nowrap
            ">
              {t('jobTitle')}
            </p>
          </motion.div>
        </div>
        <div className='flex justify-end mt-8 sm:hidden margin-react'>
          <SocialLinks />
        </div>
      </div>

      
       <motion.div
        className="h-[0.5px] bg-black mx-auto w-[80%]"
        style={{ transformOrigin: 'center' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

    </div>
  )
}

export default HeroReact
