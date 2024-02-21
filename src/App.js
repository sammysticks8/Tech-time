// import logo from './logo.svg';
import './App.css';
import Head from "./components/Head"
import Nav from "./components/Nav"
import Zoom from "./components/Zoom"
import High from "./components/High"
import Mentor from './components/Mentor';
import Browse from './components/Browse';
import Intro from './components/Intro';
import What from './components/What'
import Connect from './components/Connect'
import Faq from './components/Faq'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Nav />
      <Head />
      <Zoom />
      <High />
      <Mentor />
      <Browse />
      <Intro />
      <What />
      <Connect />
      <Faq />
      <Footer />
      
    </>
  );
}

export default App;