import React from 'react'
import { Link } from "react-router-dom"
import './DesignImageDesc.css'

function DesignImageDesc({ title }) {
    return (
        <div className='Design__Image__Desc'>
            <div className="Desc"> 
            <h1 className='Design-Image-Link'><Link to={title}>{title}</Link></h1>
            <h2 className='Design-Image-view-projects'><Link to={title}>View Projects</Link>
            <svg className='Design__Image__Arrow' width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></h2>
            </div>
                                                                                
        </div>
    )
}

export default DesignImageDesc
