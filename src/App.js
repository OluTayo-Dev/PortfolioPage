import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingList from '../src/component/ShoppingList';
import Portfolio from "./component/Portfolio";
import Cart from "./component/Cart";
import './App.css';

export default function App() {

  return ( 
    <BrowserRouter>
   <Routes>
   <Route path="/Portfolio" element={<Portfolio />} />
       <Route path="/ShoppingList" element={<ShoppingList />} />
       <Route path="/Cart" element={<Cart />} />
      
   </Routes>
 </BrowserRouter>
  );
}