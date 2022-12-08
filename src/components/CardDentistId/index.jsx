import './style.sass'
import iconDentist from '../../assets/img/iconDentist.png'
import { useParams } from 'react-router-dom'

export function CardDentistDetail(){

  const { id } = useParams()
  return(
    <div className="container-detail-dentist">
      <div className="detail-dentist">
        <img src={iconDentist} alt="" />
        <div className="container-info-dentist">
          <span>{id}</span>
          <span>sobrenome</span>
          <span>username</span>
          <button>Agendar consulta</button>
        </div>
      </div>
    </div>
  )
}
