import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navbar />
        <Routes>
          
        </Routes>
        <Footer />
      </Router>
      </>
    </div>
  );
}

export default App;
