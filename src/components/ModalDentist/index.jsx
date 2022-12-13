
import { useEffect, useState } from 'react'
import './style.sass'

export function ModalDentist(props){

  const [pacientList, setPacientList] = useState([])
  const [dentistList, setdentistList] = useState([])
  const [consult, setConsult] = useState()

  const [idPacient, setIdPacient] = useState()

  useEffect(() => {
    fetch('https://dhodonto.ctdprojetos.com.br/paciente')
    .then(res => {
      res.json()
      .then(dataPacient => {
        setPacientList(dataPacient.body)
      })
    })

    fetch('https://dhodonto.ctdprojetos.com.br/dentista')
    .then(res => {
      res.json()
      .then(dataDentist => {
        setdentistList(dataDentist)
      })
    })
  }, [])

  // console.log(pacientList)
  // console.log(dentistList)

  const dataConsult = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const data = Object.fromEntries(formData)

    const dataConsultShedule = {
      paciente: {
        matricula: data.pacient
      },
      dentista: {
        matricula: data.dentist
      },
      dataHoraAgendamento: data.teste
    }

    console.log(dataConsultShedule)
  }
  return(
    <div className={props.onChangeModal ? ' container-modal-show' : 'container-modal-notShow'}>
      <div className="header-shedule">
        <h1 className='title-shedule'>{`Agende uma consulta com ${props.data.nome}`}</h1>
        <button
          className='btn-closed'
          onClick={()=> props.onClosedModal()}
          >
            x
        </button>
      </div>
      <form className='form-shedule' onSubmit={event => dataConsult(event)}>
        <div className="input-pacient">
          <label htmlFor="pacient">Paciente</label>
          <select name="pacient" id="pacient">
            {
              pacientList.map((pacient) => (
                <option
                  value={pacient.matricula}
                  key={pacient.matricula}
                  >
                    {pacient.nome} {pacient.sobrenome}
                </option>
              ))
            }
          </select>
        </div>
        <div className="input-dentist">
          <label htmlFor="dentist">Dentista</label>
          <select name="dentist" id="dentist">
            {
              dentistList.map((dentist) => (
                <option
                  value={dentist.matricula}
                  key={dentist.matricula}
                  >
                    {dentist.nome} {dentist.sobrenome}
                </option>
              ))
            }
          </select>
        </div>
        <input
          className='date-time-shedule'
          type="datetime-local"
          name="teste" id="teste"
        />
        <button
          type="submit"
          className='btn-submit-shedule'
          >
            enviar
        </button>
      </form>
    </div>
  )
}
