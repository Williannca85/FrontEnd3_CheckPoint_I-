//Este componente deverá receber dados por Props e mostrar as Informações em Tela

function Card (props) {

  return (
    <div className="card-container" 
    style={{backgroundColor: props.corData.corHex}} >
            <div className="card-body">
                <h3>Cor: {props.corData.nomeCor}</h3>
                <span>Hexadecimal: {props.corData.corHex}</span>
            </div>
      </div>
  )
}

export default Card
