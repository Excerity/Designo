import './index.css';
import Navbar from './components/Mobile_Home/Navbar'
import Body from './components/Mobile_Home/Body';
import MidPage from './components/Mobile_Home/MidPage';
import AboveFooter from './components/Mobile_Home/AboveFooter';
import Footer from './components/Mobile_Home/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <MidPage 
  Passionate='./images/illustration-passionate.svg'
   Resourceful='./images/illustration-resourceful.svg'  
   Friendly='./images/illustration-friendly.svg'  
     Circle='/images/bg-pattern-small-circle.svg'
     />
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default App;
