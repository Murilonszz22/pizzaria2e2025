import {useState} from "react"



function App(){
  const [nome,setNome] = useState('Ronaldo')
  const [idade,setIdade] = useState (18)
  const [time,setTime] = useState ('RM')
  const [pi] = useState (3.14)

  //var idade = 18;
  //let time ='RM';
  //const pi = 3.14;

const Formulario = (props)=>{
  const [valor,setValor] = useState()

  return (
    <div>
<input 
      className = "nome"
      placeholder = {props.sombra}
      onChange={(e)=>{setValor(e.target.value)}}
      type="text" />

      <button
      className = "botao"
      onClick = {()=>{alert(props.nome + ' idade  é ' + props.idade)}}
      >
          Clique aqui
      </button>
    </div>

  )
}
  return(
    <div>
      <h3>Pizzaria 2E</h3>

      <Formulario nome = "Ricardo" 
      idade = {22}
      sombra = "Digite nome.." />
      <Formulario nome = "Maria" sombra = "Digite sua idade.." />
      <Formulario nome = "Tomas" sombra = "Digite seu time.."/>
      <Formulario nome = "Antionieta" sombra = "Digite o valor de pi" />
      <Formulario/>
      <Formulario/>
      <Formulario/>
      

    </div>
  )
}

export default App
