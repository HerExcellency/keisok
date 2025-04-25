import './App.css'
import Home from './pages/Home.Jsx'
// import ScrollToTop from './components/ScrollToTop.js'
import { ThemeProvider } from './components/contexts/ThemeContext';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

function App() { 

  return (
    <ThemeProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        
        
        {/* <ScrollToTop /> */}
      </Router>
      </ThemeProvider>
  );
}

export default App;