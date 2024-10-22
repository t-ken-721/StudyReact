import './App.css';
import BlogPage from './Components/BlogPage';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'; 

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
