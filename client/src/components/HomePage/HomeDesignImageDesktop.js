import React from 'react'
import './HomeDesignImageDesktop.css'

function HomeDesignImageDesktop() {
    return (
        <div className='Home__Design__Image__Desktop__Container'>
            
            {/* <div className='Home__Desktop__Images'>
        <div className='Desktop Home__Desktop__Image__Left Desktop__Web__Design '>
            <img  className='Home__DesktopImg DesktopImg ' src={`/images/desktop-web-design-large.jpg`} alt=""/>
            </div> 
  
            <div className='Home__Desktop Home__Desktop__Image__Right Desktop__App__Design' >
            <img  className='Home__DesktopImg DesktopImg ' src={`/images/desktop-app-design.jpg`} alt=""/>
            </div>

            <div className='Home__Desktop Home__Desktop__Image__Right Desktop__Graphic__Design '>
            <img  className='Home__DesktopImg DesktopImg' src={`/images/desktop-graphic-design-Large.jpg`} alt=""/>
            </div>
        </div> */}

<div className='Home__Desktop__Images'>
        <div className='Desktop Home__Desktop__Image__Left Desktop__Web__Design '>
            <img  className='Home__DesktopImg DesktopImg ' src={`/images/desktop-website-home-design-large.jpg`} alt=""/>
            </div> 
            
  
            <div className='Home__Desktop Home__Desktop__Image__Right Desktop__App__Design' >
            <img  className='Home__DesktopImg DesktopImg ' src={`/images/desktop-app-design.jpg`} alt=""/>
            </div>

            <div className='Home__Desktop Home__Desktop__Image__Right Desktop__Graphic__Design '>
            <img  className='Home__DesktopImg DesktopImg' src={`/images/desktop-graphic-design-Large.jpg`} alt=""/>
            </div>
        </div>
        </div>
    )
}

export default HomeDesignImageDesktop
