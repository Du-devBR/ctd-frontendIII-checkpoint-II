import './style.sass'
import iconDentist from '../../assets/img/iconDentist.png'
import { useParams } from 'react-router-dom'
import { ModalDentist } from '../ModalDentist'
import { useEffect, useState } from 'react'
import { useTheme } from '../../hooks/UseTheme/useTheme'

export function CardDentistDetail(){
  const { id } = useParams()
  const [openModal, setOpenModal] = useState(false)
  const [dentistId, setDentistId] = useState('')
  const {theme, changeTheme} = useTheme()

  useEffect(() => {
      fetch(`http://dhodonto.ctdprojetos.com.br/dentista?matricula=${id}`)
      .then((res) =>
        res.json())
        .then((dataDentistId) => {
          setDentistId(dataDentistId)
      })
  }, [id])

  const checkedFavDentist = () => {

    if(localStorage.getItem('token') === null){
      alert("Necessario fazer login para marcar uma consulta!!!")
    }else{
      setOpenModal(true)
      console.log('adicionado')
    }

  }

  const unCheckedFavDentist = () => {

    setOpenModal(false)
    console.log('retirado')

  }



  return(
    <div className="container-detail-dentist">
      {
        dentistId ? (
          <>
            <div className={`detail-dentist ${theme}`}>
              <div className="img-denstist">
                <img src={iconDentist} alt="" />
              </div>
              <div className="container-info-dentist">
                <span className={`name-dentist ${theme}`}>{dentistId.nome}</span>
                <span className={`username-dentist ${theme}`}>{dentistId.usuario.username}</span>
                <button
                  className={`btn-schedule ${theme}`}
                  onClick={checkedFavDentist}
                  >Agendar consulta
                </button>
              </div>
            </div>
            <ModalDentist
              onChangeModal={openModal}
              onClosedModal={unCheckedFavDentist}
              data={dentistId}
            />
          </>
        ) : null
      }
    </div>
  )
}
