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



  return(
    <div className="container-detail-dentist">
      <div className="detail-dentist">
        <div className="img-denstist">
        <img src={iconDentist} alt="" />
        </div>
        <div className="container-info-dentist">
          <span className='name-dentist'>{id}</span>
          <span className='username-dentist'>username</span>
          <button
            className='btn-schedule'
            onClick={checkedFavDentist}
            >Agendar consulta
          </button>
        </div>
      </div>
      {/* <div className="container-modal"> */}
        <ModalDentist
          onChangeModal={openModal}
          onClosedModal={unCheckedFavDentist}
        />
      {/* </div> */}
    </div>
  )
}
