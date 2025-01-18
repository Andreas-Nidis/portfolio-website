import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App