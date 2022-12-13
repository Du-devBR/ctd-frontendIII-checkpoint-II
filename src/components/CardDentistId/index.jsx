import './style.sass'
import iconDentist from '../../assets/img/iconDentist.png'
import { useParams } from 'react-router-dom'
import { ModalDentist } from '../ModalDentist'
import { useEffect, useState } from 'react'

export function CardDentistDetail(){
  const { id } = useParams()
  const [openModal, setOpenModal] = useState(false)
  const [dentistId, setDentistId] = useState('')


  console.log(dentistId)

  useEffect(() => {
      fetch(`http://dhodonto.ctdprojetos.com.br/dentista?matricula=${id}`)
      .then((res) =>
        res.json())
        .then((dataDentistId) => {
          setDentistId(dataDentistId)
      })
  }, [id])

  const checkedFavDentist = () => {

    setOpenModal(true)
    console.log('adicionado')

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
            <div className="detail-dentist">
              <div className="img-denstist">
                <img src={iconDentist} alt="" />
              </div>
              <div className="container-info-dentist">
                <span className='name-dentist'>{dentistId.nome}</span>
                <span className='username-dentist'>{dentistId.usuario.username}</span>
                <button
                  className='btn-schedule'
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
