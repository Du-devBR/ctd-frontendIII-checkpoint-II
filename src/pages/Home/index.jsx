import { Target } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CardDentist } from '../../components/Card'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import './style.sass'
// import bannerHome from '../../assets/img/banner-home.png'

export function Home(){

//   const dataUser = [{

//     nome: 'eduardo',
//     sobrenome: 'ananias',
//     matricula: '123',

//   },
//   {
//     nome: 'camila',
//     sobrenome: 'araujo',
//     matricula: '1568',

//   },
//   {
//     nome: 'camila',
//     sobrenome: 'araujo',
//     matricula: '1568',

//   },
//   {
//     nome: 'camila',
//     sobrenome: 'araujo',
//     matricula: '1568',

//   },
//   {
//     nome: 'camila',
//     sobrenome: 'araujo',
//     matricula: '1568',

//   },
//   {
//     nome: 'camila',
//     sobrenome: 'araujo',
//     matricula: '1568',

//   },
//   {
//     nome: 'camila',
//     sobrenome: 'araujo',
//     matricula: '1568',

//   },
//   {
//     nome: 'camila',
//     sobrenome: 'araujo',
//     matricula: '1568',

//   }
// ]

const [dentist, setDentist] = useState([])

useEffect(() =>{
  fetch('https://dhodonto.ctdprojetos.com.br/dentista')
  .then(res => {
    res.json()
    .then(dataDentist => {
      setDentist(dataDentist)
    })
  })
}, [])

console.log(dentist)
const [ favStorage, setFavStorage] = useState([])

function teste(currentFav){

  setFavStorage([...favStorage, currentFav])

}

useEffect(() => {
  localStorage.setItem('fav', JSON.stringify(favStorage))
}, [favStorage])

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
            dentist.map((user) => (
              <CardDentist
                data = {user}
                onClickFavorite = {currentFav => teste(currentFav) }
                // onchangeFav = {currentFavSelect => checkedFavDentist(currentFavSelect)}
              />
            ))
          }
        </div>
      </section>

    </>
  )
}
