import './App.css';
import { Button, Container } from "react-bootstrap";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import ProductList from './components/ProductList/ProductList';

import ProductItem from './components/ProductItem/ProductItem';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route path="/:productId" element={<ProductItem/>} />
      </Routes>
    </BrowserRouter>
    </>


  );
}

export default App;
