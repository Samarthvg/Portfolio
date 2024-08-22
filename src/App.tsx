import './App.css';
import LandingPage from './LandingPage';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Work from './Work';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <HashRouter>
    <Routes>
    <Route path="/" element={<Navigate to="About" />} />
    <Route path='/About' element={<LandingPage/>}/>
    <Route path="/Work" element={<Work/>} />
    </Routes>
    </HashRouter>
    </div>
  );  
}
export default App;
