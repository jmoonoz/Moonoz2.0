import Home from './components/Home';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Design from './components/Design';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Design' element={<Design />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
