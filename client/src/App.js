import './index.css';
import Navbar from './components/MobileHomePage/Navbar'
import HomeBody from './components/MobileHomePage/HomeBody';
import MidPage from './components/MobileHomePage/MidPage';
import AboveFooter from './components/MobileHomePage/AboveFooter';
import Footer from './components/MobileHomePage/Footer';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import WebDesign from './Pages/WebDesign';
import AppDesign from './Pages/AppDesign';
import GraphicDesign from './Pages/GraphicDesign';
import About from './Pages/About';
import Locations from './Pages/Locations';
import Contact from './Pages/Contact';

function App() {
  return (    
    <Router>
    <div className="App">
      <Switch>
      <Route path='/Contact' component={Contact} />
      <Route path='/Locations' component={Locations}/>
      <Route path='/About' component={About} />
      <Route path='/GraphicDesign' component={GraphicDesign} />
      <Route  path='/WebDesign' component={WebDesign}/>
      <Route path='/AppDesign' component={AppDesign} />
      <Route  path='/' component={HomePage}/>
    </Switch>

    </div>
     </Router>
  );
}

export default App;
