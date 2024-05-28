import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
  // Para iterar sob o array de itens e retornar um array de elementos usamos o '.map()'
  return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
        <option value=""></option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa