import Home from './pages/Home.js';
import About from './pages/About.js';
import Products from './pages/Products.js';
import Product from './pages/Product.js';
import Info from './pages/Info.js';
import NotFound from './pages/NotFound.js';
import Nav from './components/Nav.js';
import  Search  from './pages/Search.js';
import  Settings  from './pages/Settings.js';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import { useTitleColorContext } from './hooks/useTitleColorContext.js';

function App() {
  const {color} = useTitleColorContext()
  return (
    <div className="App" style={{backgroundColor:color}}>
     <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/products/:id/info' element={<Info/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/company' element={<Navigate to="/about" />}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
