import './style.sass'
import iconDentist from '../../assets/img/iconDentist.png'
import { useParams } from 'react-router-dom'
import { ModalDentist } from '../ModalDentist'
import { useState } from 'react'

export function CardDentistDetail(){
  const [openModal, setOpenModal] = useState(false)
  const { id } = useParams()

  const checkedFavDentist = () => {

    setOpenModal(true)
    console.log('adicionado')

  }

  const unCheckedFavDentist = () => {

    setOpenModal(false)
    console.log('retirado')

  }

  console.log(openModal)


  return(
    <div className="container-detail-dentist">
      <div className="detail-dentist">
        <img src={iconDentist} alt="" />
        <div className="container-info-dentist">
          <span>{id}</span>
          <span>sobrenome</span>
          <span>username</span>
          <button onClick={openModal ? unCheckedFavDentist: checkedFavDentist}>Agendar consulta</button>
        </div>
      </div>
      <div className="container-modal">
        <ModalDentist
          oncChangeModal={openModal}
        />
      </div>
    </div>
  )
}
