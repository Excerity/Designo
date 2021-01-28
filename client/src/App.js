import './index.css';
import Navbar from './components/MobileHomePage/Navbar'
import Body from './components/MobileHomePage/Body';
import MidPage from './components/MobileHomePage/MidPage';
import AboveFooter from './components/MobileHomePage/AboveFooter';
import Footer from './components/MobileHomePage/Footer';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import MobileHomePage from './Pages/MobileHomePage';
import MobileWebDesign from './Pages/MobileWebDesign';
import MobileAppDesign from './Pages/MobileAppDesign';
import GraphicDesign from './Pages/GraphicDesign';

function App() {
  return (    
    <Router>
    <div className="App">
      <Switch>
      <Route path='/GraphicDesign' component={GraphicDesign} />
      <Route  path='/WebDesign' component={MobileWebDesign}/>
      <Route path='/AppDesign' component={MobileAppDesign} />
      <Route  path='/' component={MobileHomePage}/>
    </Switch>

    </div>
     </Router>
  );
}

export default App;
