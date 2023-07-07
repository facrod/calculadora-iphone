import { useState } from 'react'
import './App.css'

function App() {
  const [resultado, setResultado] = useState("")
  const [firstnumber, setFirstnumber] = useState(null)
  const [secondnumber, setSecundnumber] = useState(null)
  const [marcador, setMarcador] = useState("")
  let array = [0,1,2,3,4,5,6,7,8,9]




  function addNumberClick(value) {
    setResultado(value)

    if (firstnumber == null) {
      setFirstnumber(value)
    } else {
      setSecundnumber(value) 
    }
  }


  function sumar() {
    setResultado(null)
    if (marcador == "+") {
      setResultado(firstnumber + secondnumber)
      setFirstnumber(resultado)
    } else {
      setMarcador("+")      
    }
  }
  function restar() {
    setResultado(null)
    if (marcador == "-") {
      setResultado(firstnumber - secondnumber)
      setFirstnumber(resultado)
    } else {
      setMarcador("-")      
    }
  }
  function multiplicar() {
    setResultado(null)
    if (marcador == "x") {
      setResultado(firstnumber * secondnumber)
      setFirstnumber(resultado)
    } else {
      setMarcador("x")      
    }
  }
  function dividir() {
    setResultado(null)
    if (marcador == "/") {
      setResultado(firstnumber / secondnumber)
      setFirstnumber(resultado)
    } else {
      setMarcador("/")      
    }
  }
  function igual() {
    switch (marcador) {
      case "+":
        setResultado(firstnumber + secondnumber)
        break;
      case "-":
        setResultado(firstnumber - secondnumber)
        break
      case "x":
        setResultado(firstnumber * secondnumber)
        break
      case "/":
        setResultado(firstnumber / secondnumber)  
        break
      default:
        break;
    }
  }
  function limpiar(params) {
    setResultado(0)
    setFirstnumber(null)
    setSecundnumber(null)
    setMarcador("clean")
  }
  return (
    <>
    <div className="contenedor">
      <input type="text" value={resultado}/>
      {
        array.map((elemento, index) => {
          return <button value={elemento} id= "botonNumb" onClick={() => addNumberClick(elemento)}>
          {elemento}
        </button>
        })
      }
      <button onClick={sumar} className={marcador == "+" ? "active" : ""}>+</button>
      <button onClick={restar} className={marcador == "-" ? "active" : ""}>-</button>
      <button onClick={multiplicar} className={marcador == "x" ? "active" : ""}>x</button>
      <button onClick={dividir} className={marcador == "/" ? "active" : ""}>/</button>
      <button onClick={igual}>=</button>
      <button onClick={limpiar} className={marcador == "" ? "clean" : ""}>limpiar</button>
    </div>      
    </>
  )
}

export default App
