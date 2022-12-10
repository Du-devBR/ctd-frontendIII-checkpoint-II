import './style.sass'
import iconDentist from '../../assets/img/iconDentist.png'
import { Star } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function CardDentist(props){
  const [fav, setFav] = useState(false)
  const [dentistFav, setDentistFav] = useState([])
  

  const checkedFavDentist = () => {

    setFav(true)

    setDentistFav(props.onClickFavorite(props.data))
    console.log('adicionado')

  }

  const unCheckedFavDentist = () => {

    setFav(false)
    console.log('retirado')
    const teste = JSON.parse(localStorage.getItem('fav'))
    const filter = teste.filter(item => item.nome !== props.data.nome)

    localStorage.setItem('fav', JSON.stringify(filter))

  }

  console.log(dentistFav)
  return(
    <>
      <div className="container-card">

        <div className="dentist-info">
          {/* <Star className={`fav-dentist ${fav ? 'select-fav' : '' }`} onClick={fav ? unCheckedFavDentist : checkedFavDentist}/> */}
          <Star className={`fav-dentist ${fav ? 'select-fav' : '' }`} onClick={fav ? unCheckedFavDentist : checkedFavDentist}/>
          <img src={iconDentist} alt="icone dentista sexo feminino, jaleco cor branco e cabelo cor marrom" />
          <p>{props.data.nome} {props.data.sobrenome}</p>
        </div>
        <Link
          className='btn-view-dentist'
          to={`/dentist/${props.data.nome}`}
          >
          +
        </Link>
      </div>
    </>
  )
}
