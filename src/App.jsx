// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import { useState } from 'react'
import Card from './Card'
import './style.css'

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeCor, setNomeCor] = useState();
  const [corHex, setCorHex] = useState();
  const [error, setError] = useState(false)
  const [cores, setCores] = useState([]);

  function adicionarCor(event) {
    event.preventDefault()

    const resultado = {
      nomeCor: nomeCor.trim(),
      corHex: corHex.trim()
    }

    if (nomeCor.trim() === '' || corHex.trim() === '') {

      console.log( {nomeCor} );
      console.log( {corHex} );
      console.log('Favor preencher os campos');      
      setError(true)

  } else {

      setError(false)
      setCores([...cores, resultado])
      setNomeCor('')
      setCorHex('')

    } 
  }

  

  return (
    <div class="App">
      <h1>CADASTRO DE CORES</h1>
        <form className="formulario" 
        onSubmit={event => adicionarCor(event)}>
            <h2>ADICIONAR COR</h2>
            <div class="groupForm">
              <label class="form-label">Nome da Cor: </label>
              <input placeholder="Cor" 
              type="text" 
              class="form-control" 
              value={nomeCor} onChange={event => setNomeCor(event.target.value)}/>
            </div>  
            <div class="groupForm">
              <label class="form-label">Cor Hexadecimal: </label>
              <input placeholder="#000000" 
              type="text"
              pattern="[#0-9a-fA-F]{3,7}"
              class="form-control form-control-color" 
              value={corHex} 
              onChange={event => setCorHex(event.target.value.trim())}/>
              <input placeholder="Hexadimal" 
              type="color" 
              class="form-control-hex" 
              value={corHex} 
              onChange={event => setCorHex(event.target.value.trim())}/>
            </div>  
            <button type="submit">Adicionar</button>
            <div className={error ? 'no-hidden' : 'hidden'}>
              <p>Por favor, verifique os dados inseridos no formulário.</p>
            </div>
        </form>
      <section className="cards">
        {
          cores.map((cor, i) => {
            return (
              <Card key={i} corData={cor} />
            )
          })
        }
      </section>
  </div> 
)
}
export default App