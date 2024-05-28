import './CampoTexto.css'
import { useState } from 'react'


const CampoTexto = (props) => {

  // "props" é um parâmetro para receber os dados passados ao adicionar o componente React.

  
  // let [valor, setValor] = useState('')
  
  // let valor = 'Guilherme Silveira'
  // Variavel de estado
  // O useState() é uma forma de definir um valor (variavel) que vai mudar e ser renderizado novamente cada vez que mudar. É um hook do React.

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className='campo-texto'>

      {/* As variaveis devem ser colocadas entre chaves "{}" para serem reconhecidas. */}
      
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto