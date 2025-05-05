import './App.css'
import Home from './pages/Home'
// import SoftwareSolutionsPage from '.'
// import ScrollToTop from './components/ScrollToTop.js'
import { ThemeProvider } from './components/contexts/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SoftwareSolutionsPage from './pages/SoftwareSolutionsPage';

const App = () => { 

  return (
    <ThemeProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Saas" element={<SoftwareSolutionsPage />   } />
          </Routes>
        
        
        {/* <ScrollToTop /> */}
      </Router>
      </ThemeProvider>
  );
}

export default App;