import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Intro from './components/content/Intro';
function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navbar />
        <Intro />
        <Routes>
          
        </Routes>
        <Footer />
      </Router>
      </>
    </div>
  );
}

export default App;
