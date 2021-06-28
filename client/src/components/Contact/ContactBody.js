import React, {useState} from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import './ContactBody.css'

const theme = createMuiTheme({

    palette: {
      primary: {
        main: '#ffffff'
      },
      secondary: {
        main: '#ffad9b'
      }
    }
  });

  
    function Body() {

    // const classes = useStyles();

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ message, setMessage ] = useState('');


    function handleSubmit(e) {
        alert('Thank you for your message. We will get back to you as soon as we can.')
        e.preventDefault();
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
   }

    return (
        <div className='Contact__Body'>
            <div className='Contact-Body-Container'>

            <h1 className='Contact-Title'>Contact Us</h1>
            <p className='Contact-Mobile-Para'> Ready to take it to the next level? Let’s talk about <br/>
             your project or idea and find out how we can help <br/>
             your business grow. If you are looking for unique <br/>
             digital experiences that’s relatable to your users, <br/>
             drop us a line.</p>

             <p className='Contact-Tablet-Para'>
             Ready to take it to the next level? Let’s talk about 
             your project or idea and find out <br/> how we can help 
             your business grow. If you are looking for unique 
             digital <br/> experiences that’s relatable to your users, 
             drop us a line.
             </p>
            

             <p className='Contact-Desktop-Para'>
             Ready to take it to the next level? Let’s talk about 
             your project or  <br/> idea and find out  how we can help 
             your business grow. If you are <br/> looking for unique 
             digital experiences that’s relatable to your <br/> users, 
             drop us a line.
             </p>

             
            <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
                <div>
                <TextField 
                color="primary"
                className='contact-textfield'
                id="standard-basic" 
                label="Name" 
                style={{ width: '28rem'}}
                inputProps={{ style: {color: 'white', multilineColor: 'white' }}}
                value={name}
                onInput={ e=>setName(e.target.value)}
                />
                </div>

                <div>
                <TextField 
                color="primary"
                id="standard-basic" 
                label="Email Address"
                style={{ width: '28rem'}}
                inputProps={{ style: {color: 'white' }}}
                value={email}
                onInput={ e=>setEmail(e.target.value)}
                />
                </div>

               <div>
               <TextField 
                id="standard-basic" 
                label="Phone"
                style={{ width: '28rem'}} 
                inputProps={{ style: {color: 'white' }}}
                value={phone}
                onInput={ e=>setPhone(e.target.value)}

                />
                <div>

               </div>
                 <TextField 
                 id="outlined-multiline-static" 
                 label="Your Message"
                 multiline
                 rows={5}
                 style={{ width: '28rem'}}
                 inputProps={{ style: {color: 'white' }}}
                 value={message}
                 onInput={ e=>setMessage(e.target.value)}
                  />
                </div>

                <div className='Contact-Button'>
                <Button color="secondary" variant="contained" type="submit">
                 Submit
                </Button>
                  </div>

            </form>
            </ThemeProvider>
            </div>
        </div>
    )
}

export default Body
