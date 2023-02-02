import { useEffect, useRef, useState } from "react";


function App() {
  const [cont, setCont] = useState(0)

  const numberRef = useRef(0)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const oldContRef = useRef(0)

  useEffect(()=>{ // toda vez que o componente for renderizado , diferente de contruido
    numberRef.current = Math.random()
  })

  useEffect(()=>{ // toda vez que o componente e renderizado ele faz um click no local que esta chaando o buttonRef atrasves do ref
    buttonRef.current?.click()
  },[])

  useEffect(()=>{ // o use ref não espera a mudança e ja armazena o valor , o estado espera todo o componente ser renderizado para guardar a informação
    oldContRef.current = cont
  },[cont])

  return (
    <div className="App">
      <h1>O Ref number é: {numberRef.current}</h1>
      <h1>Contador é: {cont}</h1>
      <h1>Valor antigo do Contador: {oldContRef.current}</h1>

      <button ref={buttonRef} onClick={()=> setCont(cont + 1)}>Adiciona</button>
    </div>
  );
}

export default App;
