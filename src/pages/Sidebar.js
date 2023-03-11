import React from 'react'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsPaletteFill} from 'react-icons/bs'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className='Link'>
            <Link to="/"><FaHome/></Link>
            <Link to="/bio"><BsFillPersonFill/></Link>
            <Link to="/art"><BsPaletteFill/></Link>
            <Link to="/blog"><BsFillJournalBookmarkFill/></Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar