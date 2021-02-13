import React from 'react'
import './DesignImageDesc.css'

function DesignImageDesc({ title }) {
    return (
        <div className='Design__Image__Desc'>
            <div className="Desc">
            <h1>{title}</h1>
            <h2>View Projects</h2>
            </div>
          
        </div>
    )
}

export default DesignImageDesc
