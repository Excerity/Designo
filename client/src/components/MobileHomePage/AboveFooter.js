import React from 'react'
import '../AboveFooter.css'

function AboveFooter() {
    return (
        <div className='AboveFooter'>
            <div className='AboveFooter__Header'>
            <h3>Let’s talk about</h3>
            <h3>your project</h3>
            </div>
           
        <div className='AboveFooter__Paragraph'>
        <p>Ready to take it to the next level? Contact us</p>
            <p>today and find out how our expertise can</p>
            <p>help your business grow.</p>
        </div>
           

        <button className='AboveFooter__Button'>Get in touch</button>

        </div>
    )
}

export default AboveFooter

