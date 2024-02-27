import { useState } from 'react'
import './Main.css'

export default function Main() {

  const [count, setCount] = useState(0);

  const incrementCount = () =>{
    setTimeout(()=>{
      setCount( (count) => count +1)
    },1000);
  }

  const decrementCount = () =>{
    setTimeout(()=>{
      if(count > 0){
        setCount((count) => count -1)  
      }
    },1000)
  }

  const reset = () =>{
    setCount(0)
  }

  return (
    <>
      <main>
        <section className="boxCount">
        <div className= "count">
            <h2>Contador</h2>
            <p>{count}</p>
            <div className="actions">
              <button onClick={decrementCount}>diminuir</button>
              <button onClick={incrementCount}>aumentar</button>
              <button onClick={reset}>resetar</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
