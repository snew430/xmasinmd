import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Navigation,
  Footer,
  Home,
  Hour,
  About,
  Stations,
  Sponsors,
  Contact,
  NoMatch,
} from './components/index';

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hour" element={<Hour />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
      <Stations />
      <Sponsors />
      <Footer />
    </Router>
  );
}

export default App;
