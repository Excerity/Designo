import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Body.css'

function Body() {

    return (
        <div className='Body'>
            <h1>Contact Us</h1>
            <p> Ready to take it to the next level? Let’s talk about your project or idea and find out how 
  we can help your business grow. If you are looking for unique digital experiences that’s 
  relatable to your users, drop us a line.</p>
            
            <div  className='Form__Container'>
            <form className='Form'>
                <div>
                <TextField id="standard-basic" label="Name" />
                </div>
                <div>
                <TextField id="standard-basic" label="Email Address" />
                </div>
                <div>
                <TextField id="standard-basic" label="Phone" />
                </div>
                 <div>
                 <TextField id="standard-basic" label="Your Message" />
                </div>

                <Button variant="contained" className='Button'>Submit</Button>

            </form>
            </div>
      


        </div>
    )
}

export default Body
