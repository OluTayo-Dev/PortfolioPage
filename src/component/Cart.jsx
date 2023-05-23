import React, {useState} from "react";
import './Cart.css';


function Cart() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleSubmit = (e) =>{
    e.preventDefault();
      if(inputValue.trim() !== ''){
        setItems([...items, inputValue]);
        setInputValue('');
      }
    
   }
  
 const deleteItem = (index) =>{
    const newItems = [...items];
    newItems.splice(index,1);
    setItems(newItems);
 };
 



  return(
    <div className="Cart">
      <h1 id="list">Shopping List</h1>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        placeholder="Enter your Item"
        />
        <button onClick={handleSubmit}>Add</button>
        </form>
      </div>
      <ul>
        {items.map((item, index)=>(
          <li key={index}>
            <span id="item">{item}</span>
            <button onClick={()=>deleteItem(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Cart;