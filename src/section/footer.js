import React from 'react'

export const Footer = (props) => {
  const { lang } = props
  return (
    <footer className=' p-4 h-fit md:p-16 content-end grid'
    style={{
    background: "linear-gradient(to bottom, #4682B4,#8A2BE2,#FFB6C1)", 
  }}>
      <p className="text-center text-lg mt-4">
    <span className="text-yellow-300">Copyright</span> 
    <span className="text-black"> 2024</span>
</p>

      </footer>
  )
}
