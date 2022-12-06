import './style.sass'
import iconDentist from '../../assets/img/iconDentist.png'
import { Star } from 'phosphor-react'

export function CardDentist(){
  return(
    <>
      <div className="container-card">

        <div className="dentist-info">
          <Star className='fav-dentist'/>
          <img src={iconDentist} alt="icone dentista sexo feminino, jaleco cor branco e cabelo cor marrom" />
          <p>Dra Dentista Azul</p>
        </div>
        <button className='btn-view-dentist'>+</button>
      </div>
    </>
  )
}
