import './index.css';
import Navbar from './components/Navbar'
import Body from './components/Body';
import MidPage from './components/MidPage';
import AboveFooter from './components/AboveFooter';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <MidPage />
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default App;
