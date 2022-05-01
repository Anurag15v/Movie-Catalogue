import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetailsPage from './Components/MovieDetailsPage/MovieDetailsPage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
