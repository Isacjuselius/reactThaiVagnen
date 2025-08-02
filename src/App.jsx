import Home from "./pages/Home";
import KontaktaOss from "./pages/KontaktaOss";
import Menu from "./pages/Menu";
import OmOss from "./pages/OmOss";
import Table from "./pages/Table";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontaktaOss" element={<KontaktaOss />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/omOss" element={<OmOss />} />
          <Route path="/table" element={<Table />} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
