import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [inp, setInp] = useState('')
  const [res, setResult] = useState()

  let result = ()=>{
    setResult(eval(inp))
    setInp('')

  }

  return (
    <>
    <h1></h1>
    <div className="container">
      <h1>Calculator</h1>
      
      <input type="text" value={inp} onChange={(e)=>{setInp(e.target.value)}}  required/>
      <p>{res}</p>
     
      <div className="keyboard">
     
        <button className='btn' onClick={result}>=</button>
        <button className='btn' onClick={()=>{setInp(inp+'1')}}>1</button>
        <button className='btn' onClick={()=>{setInp(inp+'2')}}>2</button>
        <button className='btn' onClick={()=>{setInp(inp+'3')}}>3</button>
        <button className='btn' onClick={()=>{setInp(inp+'4')}}>4</button>
        <button className='btn' onClick={()=>{setInp(inp+'5')}}>5</button>
        <button className='btn' onClick={()=>{setInp(inp+'6')}}>6</button>
        <button className='btn' onClick={()=>{setInp(inp+'7')}}>7</button>
        <button className='btn' onClick={()=>{setInp(inp+'8')}}>8</button>
        <button className='btn' onClick={()=>{setInp(inp+'9')}}>9</button>
        <button className='btn' onClick={()=>{setInp(inp+'0')}}>0</button>


        <button className='btn' onClick={()=>{setInp(inp+'+')}}>+</button>
        <button className='btn' onClick={()=>{setInp(inp+'-')}}>-</button>
        <button className='btn' onClick={()=>{setInp(inp+'/')}}>/</button>
        <button className='btn' onClick={()=>{setInp(inp+'*')}}>*</button>
        <button className='btn' onClick={()=>{setInp(inp+'%')}}>%</button>

        
      </div>
    </div>
    </>
  )
}

export default Calculator;
