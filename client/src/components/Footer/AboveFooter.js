import React from 'react'
import './AboveFooter.css'
import { HashLink as Link} from 'react-router-hash-link';


function AboveFooter() {
    return (
        <div className='AboveFooter'>
            <div className="AboveFooter__Text__Container">
            <div className='AboveFooter__Header'>
            <h3>Let’s talk about</h3>
            <h3 id='H3__AboveFooter'>your project</h3>
            </div>
           
        <div className='AboveFooter__Paragraph'>
        <p>Ready to take it to the next level? Contact us</p>
        <p>today and find out how our expertise can</p>
        <p>help your business grow.</p>
        </div>

         
        <div className='AboveFooter__Paragraph__Desktop'>
        <p>Ready to take it to the next level? Contact us today and find out</p>
        <p>how our expertise can help your business grow.</p>
             </div>
            </div>

        <div className="Button__Container">
            <Link to='/Contact#top'>
            <button className='Button__Above__Footer'><p>Get In Touch</p></button>
            </Link>
          </div>
        </div>
    )
}

export default AboveFooter

