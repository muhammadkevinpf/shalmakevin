import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './module/Nav';
import About from './module/About';
import CountdownTimer from './module/CountdownTimer';
import Place from './module/Place';
import GuestBook from './module/GuestBook';
import Footer from './module/Footer';
import Hero from './module/Hero';
import Timeline from './module/Timeline';
import { song } from './assets';
import ReactHowler from 'react-howler';
import Modals from './components/Modals';

function App() {
  return (
    <div className="wrapper">
      {/* <Navigation /> */}
      <Hero />
      <About />
      <Timeline />
      <CountdownTimer />
      <Place />
      <GuestBook />
      <Footer />
      <Modals />
      <ReactHowler src={song} playing={true} />
    </div>
  );
}

export default App;
