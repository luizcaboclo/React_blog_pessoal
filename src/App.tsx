import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home'
import Footer from './components/estaticos/footer/Footer';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaPostagem from './components/postagem/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatemas/ListaTemas';
import CadastroPost from './components/postagem/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagem/deletarPostagens/DeletarPostagens';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';


function App() {
  return (
    <>
    <Router>
      <Navbar />
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/cadastrousuario' element={<CadastroUsuario />}/>
        <Route path='/temas' element={<ListaTema />} />
        <Route path='/postagem' element={<ListaPostagem />} />
        <Route path="/formularioPostagem" element={<CadastroPost />} />
        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
        <Route path="/formularioTema" element={<CadastroTema />} />
        <Route path="/formularioTema/:id" element={<CadastroTema />} />
        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
        <Route path="/deletarTema/:id" element={<DeletarTema />} />
       </Routes>
       <Footer />
    </Router>
    </>
  );
}

export default App;
