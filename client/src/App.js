import './index.css';
import Navbar from './components/MobileHomePage/Navbar'
import Body from './components/MobileHomePage/Body';
import MidPage from './components/MobileHomePage/MidPage';
import AboveFooter from './components/MobileHomePage/AboveFooter';
import Footer from './components/MobileHomePage/Footer';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import MobileHomePage from './Pages/MobileHomePage';
import MobileWebDesign from './Pages/MobileWebDesign';


function App() {
  return (    
    <Router>
    <div className="App">
      <Switch>
      <Route  path='/WebDesign' component={MobileWebDesign}/>
      <Route  path='/' component={MobileHomePage}/>
   
    </Switch>

    
      {/* <Navbar />
      <Body />
      <MidPage 
  Passionate='./images/illustration-passionate.svg'
   Resourceful='./images/illustration-resourceful.svg'  
   Friendly='./images/illustration-friendly.svg'  
     Circle='/images/bg-pattern-small-circle.svg'
     />
      <AboveFooter />
      <Footer /> */}
    </div>
     </Router>
  );
}

export default App;
