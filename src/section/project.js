import React from 'react'
import Lantern from '../assets/lantern.png' 
import Mitsuki1 from "../assets/mitsuki1.jpg"
import { ProjectCard } from '../components/projectcard'
import { motion, inView } from 'framer-motion'
export const Project = (props) => {
  const { lang } = props

  const enTitle = (<>
    <p className='text-gray-800 text-2xl md:text-5xl mb-3 font-bold uppercase'>My <span className='text-yellow-200'>Projects</span></p>
    <p className='text-gray-800 text-lg md:text-2xl font-bold'>What are you looking at?</p>
    </>)
    const idTitle = (<>
      <p className='text-gray-800 text-2xl md:text-5xl mb-3 font-bold uppercase'><span className='text-yellow-200'>projek </span>saya</p>
      <p className='text-gray-800 text-lg md:text-2xl font-bold'>Apa lu liat liat?</p>
      </>)
  return (
    <section className='h-full md:p-8 pb-8 overflow-x-hidden'
    style={{
    background: "linear-gradient(to bottom, #FFB6C1,#8A2BE2,#4682B4)", 
      }}>
        <motion.div
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        className='p-8 pt-16 md:pt-8 h-1/5 grid content-center'>
          {lang === 'id'? idTitle : enTitle}
        </motion.div>
        <motion.div 
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        className='bg-opacity-30 relative h-3/4 sm:h-4/5 rounded-xl '>
          <div className='z-20 absolute h-full w-16 bg-gradient-to-r '></div>
          <div className='z-20 absolute h-full w-16 bg-gradient-to-l right-0 '></div>
           <div className='shadow-inner h-full flex gap-10 p-10 overflow-y-hidden overflow-x-scroll'>
                  <p className='text-8xl text-yellow-200'>Masih Kosong Bjir</p>
            {/* <ProjectCard
            title='Tes Karbit'
            image={Mitsuki1}
            plg='javascript'
            pf='web'
            fw='react.js'
            repo='https://github.com/rizalalfadlil/bit'
            page='https://rizalalfadlil.github.io/bit/'
            desc='Seberapa karbit kamu'/> */}
           </div>
        </motion.div>
      </section>
  )
}
