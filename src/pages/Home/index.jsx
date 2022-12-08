import { Target } from 'phosphor-react'
import { useState } from 'react'
import { CardDentist } from '../../components/Card'
import './style.sass'
// import bannerHome from '../../assets/img/banner-home.png'

export function Home(){

  const [fav, setFav] = useState(false)
  const [dentistFav, setDentistFav] = useState([])
  const [dentist, setDentist] = useState([])

  const dataUser = [{

    nome: 'eduardo',
    sobrenome: 'ananias',
    matricula: '123',

  },
  {
    nome: 'camila',
    sobrenome: 'araujo',
    matricula: '1568',

  },
  {
    nome: 'camila',
    sobrenome: 'araujo',
    matricula: '1568',

  },
  {
    nome: 'camila',
    sobrenome: 'araujo',
    matricula: '1568',

  },
  {
    nome: 'camila',
    sobrenome: 'araujo',
    matricula: '1568',

  },
  {
    nome: 'camila',
    sobrenome: 'araujo',
    matricula: '1568',

  },
  {
    nome: 'camila',
    sobrenome: 'araujo',
    matricula: '1568',

  },
  {
    nome: 'camila',
    sobrenome: 'araujo',
    matricula: '1568',

  }
]

// const checkedFavDentist = (currentFav) => {

//   {
//     dataUser.map((map) => {
//       if(currentFav.nome !== map.nome){
//         setFav(false)
//         console.log('adicionado')
//       }else{
//         setFav(true)
//         console.log('retirado')
//       }

//     })
//   }

// }

// const unCheckedFavDentist = (currentFav) => {

//   setFav(false)
//   console.log(currentFav)

// }

  return(
    <>
      <div className='content-home'>
        <div className="banner-info">
          <h1>Faça do seu sorriso perfeito ainda melhor.</h1>
          <p>Contamos com os melhores profissionais do mercado, referências para o mercado de odontologia do Brasil e exterior.</p>
        </div>
      </div>
      <section className="container-section-dentist">
        <h1>Conheça nossos dentistas</h1>
        <div className="list-card-dentist">
          {
            dataUser.map((user) => (
              <CardDentist
                data = {user}
                onClickFav = {currentFav => checkedFavDentist(currentFav)}
                // onClickFav = {currentFav => fav ? unCheckedFavDentist(currentFav) : checkedFavDentist(currentFav)}
              />
            ))
          }
        </div>
      </section>

    </>
  )
}
