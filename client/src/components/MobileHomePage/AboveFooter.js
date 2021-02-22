import React from 'react'
import '../AboveFooter.css'
import Button from '@material-ui/core/Button';

function AboveFooter() {
    return (
        <div className='AboveFooter'>
            <div className="AboveFooter__Text__Container">
            <div className='AboveFooter__Header'>
            <h3>Let’s talk about</h3>
            <h3>your project</h3>
            </div>
           
        <div className='AboveFooter__Paragraph'>
        <p>Ready to take it to the next level? Contact us</p>
            <p>today and find out how our expertise can</p>
            <p>help your business grow.</p>
        </div>
            </div>
   
           
        <div className="Material__UI__Button__Container">
        <Button className='Material__Ui__Button__Above__Footer' variant="contained">Get In Touch</Button>
        </div>

        </div>
    )
}

export default AboveFooter

