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

function App() {
  useEffect(() => {
    const audioElement = new Audio(song);
    // window.addEventListener("click" , () => {
    //   audioElement.play();
    // })

    window.addEventListener("touchmove", () => {
      audioElement.play();
    })

    window.addEventListener("scroll", () => {
      audioElement.play();
    })
  }, []);

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
    </div>
  );
}

export default App;
