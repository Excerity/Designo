import React from 'react'
import './DesignImageDesc.css'

function DesignImageDesc({ title }) {
    return (
        <div className='Design__Image__Desc'>
            <div className="Desc">
            <h1>{title}</h1>
            <h2>View Projects <svg className='Design__Image__Arrow' width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></h2>
            </div>
                                                                                
        </div>
    )
}

export default DesignImageDesc
