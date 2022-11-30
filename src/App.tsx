import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home'
import Footer from './components/estaticos/footer/Footer';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';


function App() {
  return (
    <>
    <Router>
      <Navbar />
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cadastrousuario' element={<CadastroUsuario />}/>
       </Routes>
       <Footer />
    </Router>
    </>
  );
}

export default App;
