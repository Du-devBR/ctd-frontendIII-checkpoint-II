import { useEffect, useState } from 'react'
import { CardDentist } from '../../components/Card'
import './style.sass'

export function FavDentist(){

  const [ favorite, setFavorite ] = useState([])
  const [ arrayFavorite, setArrayFavorite] = useState([])

  useEffect(() => {
    const favDentist = localStorage.getItem('fav')
    setFavorite(JSON.parse(favDentist))
  }, [])

  useEffect(() => {
    if(favorite === ''){
      console.log('sem dados')
    }else{
      setArrayFavorite(favorite)
    }
  }, [favorite])
  return(
    <div className="teste">
      {
        arrayFavorite.map((user) =>(
          <CardDentist
          data={user}
          onClickFavorite = {() => console.log('removido')}/>
        ))
      }
    </div>
  )
}
