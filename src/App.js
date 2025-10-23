import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import BookAppointment from './pages/BookAppointment';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/appointment" element={<BookAppointment />} />
          <Route path="/shop/:category" element={<CategoryPage />} />
        </Routes>
      </>
    </Router>
  );
}


export default App;