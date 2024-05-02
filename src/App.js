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
import Gullah from './components/Gullah';
import Kreyol from "./components/Kreyol";
import Footer from "./components/footer";
// import Shop from "./components/shop";
import shirt from "../src/images/shirt.jpg";
import Blog1 from "./components/blog1";
import Blog2 from "./components/blog2";
import Blog3 from "./components/blog3";
import Blog4 from "./components/blog4";
import Blog from "./components/Blog";
import Travel from "./components/Travel";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wolof" element={<Wolof />} />
          <Route path="/gullah" element={<Gullah />} />
          <Route path="/kreyol" element={<Kreyol />} />
          <Route path="/yoruba" element={<Yoruba />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/blog4" element={<Blog4 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/krio" element={<Krio />} />
          <Route path="travel" element={<Travel/>}/>
          {/* <Route path='/privacy-policy' component={() => {
            window.location.href = 'https://example.com/1234';
            return null;
          }} /> */}

          {/*<Route path="/" element={<Merchform/>}/> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  )

}

function Home() {
  return (
    <div className='table'>
      <table className="bounce">
        <tbody>
          <tr>
            <td>
              <h1>Welcome to the Wocktan</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Wocktan is the best way to learn an African language by...</h3>
              <ul>
                <li>Video Lessons</li>
                <li>Weekly Vocab and Grammar</li>
                <li>Responsive speakers(wockers)</li>
                <li>Teaching and become a wocker.</li>
              </ul>
            </td>
            <td>
              <div className='shopt'>
                <h2 id="scrolhead">Choose a language.</h2>
                <Scroller />
              </div>
            </td>
          </tr>
          <tr className="long">
            <td >
              <h1>Wocktan Blog</h1>
              <h2>Why is it important to learn an African language?</h2>
              <p>It is important to learn a different language for many reasons. If you know another language, you can do a lot of different things. If you want to do business in different countries or meet people from different countries, it would be beneficial to know another language. Even if you can't speak it properly at first, if you try, people will receive you differently and favorably.</p>
            </td>
            <td>
            <div className='shopt'>



              <a href="https://wocktancomshop.creator-spring.com/" className='hype'>
                <h1>Shop </h1>
              </a>





              <a href="https://wocktancomshop.creator-spring.com/">
                <img src={shirt} alt="logo" className="homepic" />
              </a>
            </div>


          </td>
          </tr>
          <tr>
            <td colSpan="2">
              <p>Check us out in the Metaverse. Come to the newly built Wocktan school of languages in the metaverse of Decentraland. We are located at -60-18.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;