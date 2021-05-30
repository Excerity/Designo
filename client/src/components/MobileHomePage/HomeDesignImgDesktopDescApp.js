import React from 'react'
import './HomeDesignImgDesktopDescApp.css'

function HomeDesignImgDesktopDescApp({ title }) {
    return (
        <>
            <div className='Desc__Desktop__Container__App'>
            <h1 className='App__Desktop__Desc__HomePage' >{title}</h1>
            <h2 className='View__Projects'>View Projects <svg className='Design__Image__Arrow' width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></h2>
        </div>
        </>
    )
}
       
export default HomeDesignImgDesktopDescApp
