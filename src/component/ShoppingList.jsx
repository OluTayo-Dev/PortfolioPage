import React from 'react'
import { useState } from 'react';
import './Shop.css';

function ShoppingList() {
    const [val, setVal] = useState([]);

  const handleAdd=()=>{
    const abc = [...val,[]]
    setVal(abc)
  }
  const handleChange=(onChangevalue,i)=>{
    const inputdata=[...val]
    inputdata[i] = onChangevalue.target.value
    setVal(inputdata)
    console.log(val, "data")

  }
  const handleDelete=(i)=>{
    const deletVal = [...val]
    deletVal.splice(i,1)
    setVal(deletVal)
  }
 
  return (
    <>
    <div className='List'>
    <button onClick={()=>handleAdd()}>Add</button>
      {val.map((data,i)=>{
        return (
            <div>
                <input value={data} onChange={e=>handleChange(e,i)} />
                <button onClick={()=>handleDelete(i)}>x</button>
            </div>
            
        )
      })}

   </div>
          

    
    </>


  )
}
export default ShoppingList;