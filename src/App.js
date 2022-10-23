import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Wolof from "./components/Wolof";
import Scroller from './components/Scroller';
import Krio from "./components/Krio";
import Yoruba from './components/Yoruba';
import Geechie from './components/Geechie';
import Kreyol from "./components/Kreyol";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wolof" element={<Wolof />} />
          <Route path="/geechie" element={<Geechie />} />
          <Route path="/kreyol" element={<Kreyol />} />
          <Route path="/yoruba" element={<Yoruba />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/krio" element={<Krio />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  )

}

function Home() {
  return (<>
    <div className='table'>

      <table class="bounce">
        <td>
          <tr>
            <h1> Welcome to the wocktan</h1>
          </tr>
          <tr>
            <h3>Wocktan is the worlds most imersive way to learn African languages by...</h3>

            <ul>
              <li>Video Lessons</li>
              <li>Weekly Quizes</li>
              <li>Weekly Vocab and Grammar</li>
              <li>Responsive speakers(wockers)</li>
              <li>Teaching and become a wocker.</li>
            </ul>
          </tr>
        </td>
        <td>
          <tr id="scrolhead"><h2>Choose a language.</h2></tr>
          <tr><Scroller /></tr>
        </td>
      </table>

    </div>

  </>)
}
export default App;