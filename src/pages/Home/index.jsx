import imgBanner from '../../assets/img/banner-home.png'
import { Target } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CardDentist } from '../../components/Card'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useTheme } from '../../hooks/UseTheme/useTheme'
import './style.sass'
// import bannerHome from '../../assets/img/banner-home.png'

export function Home(){

const [dentist, setDentist] = useState([])
const {theme, changeTheme} = useTheme()

useEffect(() =>{
  fetch('https://dhodonto.ctdprojetos.com.br/dentista')
  .then(res => {
    res.json()
    .then(dataDentist => {
      setDentist(dataDentist)
    })
  })
}, [])

const [ favStorage, setFavStorage] = useState([])

function teste(currentFav){

  setFavStorage([...favStorage, currentFav])

}

useEffect(() => {
  localStorage.setItem('fav', JSON.stringify(favStorage))
}, [favStorage])

  return(
    <>
      <div className={`content-home ${theme}`}>
        <div className="banner-info">
          <h1>Faça do seu sorriso perfeito ainda melhor.</h1>
          <p>Contamos com os melhores profissionais do mercado, referências para o mercado de odontologia do Brasil e exterior.</p>
        </div>
        <img src={imgBanner} alt="" />
      </div>
      <section className="container-section-dentist">
        <h1 className={`title-section-detists ${theme}`}>Conheça nossos dentistas</h1>
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
