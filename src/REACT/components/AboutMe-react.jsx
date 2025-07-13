import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AboutMeReact = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize() // check on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const fullText = `Soy un desarrollador Full-Stack apasionado por construir aplicaciones web intuitivas y de alto rendimiento. Mi experiencia abarca tanto el frontend como el backend, lo que me permite crear soluciones escalables y centradas en el usuario. Trabajo con bases de datos relacionales como MySQL y no relacionales como MongoDB, diseñando estructuras eficientes y asegurando un flujo de datos fluido. En el frontend, desarrollo principalmente con React y Vue, utilizando frameworks modernos para crear interfaces dinámicas y mantenibles. Aunque mi portfolio personal está hecho con Astro, siempre estoy explorando nuevas tecnologías para optimizar el rendimiento y mejorar mi flujo de trabajo. He desarrollado aplicaciones web para estaciones de carga de vehículos eléctricos, mapas interactivos con geolocalización y plataformas de gestión de eventos, además de liderar rediseños y mantenimiento de sitios educativos y crear soluciones personalizadas en WordPress para sectores como el farmacéutico y el artístico. Cada proyecto ha profundizado mi comprensión sobre usabilidad, rendimiento y cómo conectar la tecnología con un impacto real. Aunque no me dedico exclusivamente al diseño UX/UI, valoro profundamente la usabilidad, la accesibilidad y las interacciones cuidadosas. Fuera del código, me apasiona el fútbol, los videojuegos, los juegos de mesa y la lectura. Me motiva resolver problemas, ya sea depurando una línea compleja de código o buscando la mejor estrategia en una partida.`
  
  const visibleText = isMobile && !isExpanded
    ? fullText.slice(0, 400) + '...'
    : fullText

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
          Sobre mí
        </h3>

        <p className='text-lg font-ibmPlexSans font-light'>
          {visibleText}
        </p>

        {isMobile && (
          <button
            onClick={() => setIsExpanded(prev => !prev)}
            className='text-red-500 mt-2 font-bold flex items-center gap-1 animate-bounce'
          >
            {isExpanded ? 'Leer menos' : 'Leer más'}
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
