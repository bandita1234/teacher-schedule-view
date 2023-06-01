import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './components/Main';
import Header from './components/Header'
import Footer from './components/Footer'
import Schedule from './components/Schedule';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
