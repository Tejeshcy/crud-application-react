
import './App.css';
import Login from './component/Login';
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
