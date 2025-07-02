import React from 'react'
import { Link } from 'react-router-dom'

const Downloadbutton = ({ link }) => {
  return (
    <Link
      href={link}
      className='py-2 px-3 text-white bg-[#456379] rounded-sm'
      target='_blank'
      rel="noopener noreferrer"
    >
      Download
    </Link>
  )
}

export default Downloadbutton