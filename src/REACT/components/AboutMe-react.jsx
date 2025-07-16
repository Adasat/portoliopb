import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useI18n from '../../hooks/useI18n'
import { initI18n } from '../../i18n'


const AboutMeReact = ({ initialLocale, initialMessages }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [ready, setReady] = useState(false);

  const { t } = useI18n();

  useEffect(() => {
    initI18n(initialLocale, initialMessages).then(() => setReady(true));
  }, [initialLocale, initialMessages]);

  /* 3️⃣  Hasta que esté listo, renderiza un placeholder ligero */


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize() // check on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!ready) {
    return <div style={{ height: "500px" }} />;  // o un spinner
  }
  
  const visibleText = isMobile && !isExpanded
    ? t('about', { returnObjects: true }).slice(0, 2) + '...'
    : t('about', { returnObjects: true })

  return (
    <motion.div
      className='
        bg-black text-backgroundReact 
        margin-react py-12 mt-8 md:mt-16
        flex flex-col md:flex-row gap-8 md:gap-12
      '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className='flex flex-col gap-4 w-full md:w-1/2'>
        <h3 className='text-4xl md:text-6xl font-bold font-spaceGrotesk text-white'>
          {t('description')}
        </h3>

        <p className='text-lg font-ibmPlexSans font-light' dangerouslySetInnerHTML={{ __html: visibleText }} />

        {isMobile && (
          <button
            onClick={() => setIsExpanded(prev => !prev)}
            className='text-red-500 mt-2 font-bold flex items-center gap-1 animate-bounce'
          >
            {isExpanded ? t('readLess') : t('readMore')}
            <span className='text-xl'>{isExpanded ? '↥' : '↧'}</span>
          </button>
        )}
      </div>

      <motion.div
        className='w-full md:w-1/2'
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img
          src="/gemini-section.jpg"
          alt="Imagen sobre mí"
          className='w-full h-[300px] md:h-full md:max-h-[500px] object-cover rounded-sm'
        />
      </motion.div>
    </motion.div>
  )
}

export default AboutMeReact
