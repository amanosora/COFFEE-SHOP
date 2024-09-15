import './App.css';
import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages';
import { Aboutpage } from './pages';
import { NavBar } from './components';
import { Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
