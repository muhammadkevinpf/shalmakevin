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
    window.addEventListener('load', function () {
      var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var source = audioCtx.createBufferSource();
      var xhr = new XMLHttpRequest();
      xhr.open('GET', song);
      xhr.responseType = 'arraybuffer';
      xhr.addEventListener('load', function (r) {
        audioCtx.decodeAudioData(xhr.response, function (buffer) {
          source.buffer = buffer;
          source.connect(audioCtx.destination);
          source.loop = false;
        });
        source.start(0);
      });
      xhr.send();
    });
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
