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
        <Route path="/xmasinmd" element={<Home />} />
        <Route path="/xmasinmd/hour" element={<Hour />} />
        <Route path="/xmasinmd/stations" element={<Stations />} />
        <Route path="/xmasinmd/about" element={<About />} />
        <Route path="/xmasinmd/contact" element={<Contact />} />
        <Route path="/xmasinmd/*" element={<NoMatch />} />
      </Routes>
      <Sponsors />
      <Footer sticky="bottom" />
    </Router>
  );
}

export default App;
