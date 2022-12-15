
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../hooks/UseTheme/useTheme'
import './style.sass'

export function ModalDentist(props){

  const [pacientList, setPacientList] = useState([])
  const [dentistList, setdentistList] = useState([])

  const [idPacient, setIdPacient] = useState()

  const { theme, changeTheme} = useTheme()

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

  const dataConsult = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const data = Object.fromEntries(formData)

    console.log(data)
    const token = localStorage.getItem('token')

    const dataConsultShedule = {
      paciente: {
        matricula: data.pacient
      },
      dentista: {
        matricula: data.dentist
      },
      dataHoraAgendamento: data.dataShedule
    }

    const requestHeaders = {
      "Content-Type" : "application/json",
      Authorization: `Bearer ${token}`
    }

    const requestConfig = {
      method: 'POST',
      body: JSON.stringify(dataConsultShedule),
      headers: requestHeaders
    }

    try {
      fetch('https://dhodonto.ctdprojetos.com.br/consulta', requestConfig)
      .then(res => {
        console.log(res)
        if(res.ok){
          alert('Consulta agendada com sucesso')
          useNavigate('/home')
        }else{
          alert('Erro ao cadastrar consulta')
        }
      })

    } catch (error) {
      alert(error.message)
    }
  }
  return(
    <div className={props.onChangeModal ? `container-modal-show ${theme}` : `container-modal-notShow ${theme}`}>
      <div className={`header-shedule ${theme}`}>
        <h1 className={`title-shedule ${theme}`}>{`Agende uma consulta com ${props.data.nome}`}</h1>
        <button
          className={`btn-closed ${theme}`}
          onClick={()=> props.onClosedModal()}
          >
            x
        </button>
      </div>
      <form className={`form-shedule ${theme}`} onSubmit={event => dataConsult(event)}>
        <div className={`input-pacient ${theme}`}>
          <label className={`label-pacient ${theme}`} htmlFor="pacient">Paciente</label>
          <select className={`select-pacient ${theme}`} name="pacient" id="pacient">
            {
              pacientList.map((pacient) => (
                <option
                  className={`option-pacient ${theme}`}
                  value={pacient.matricula}
                  key={pacient.matricula}
                  >
                    {pacient.nome} {pacient.sobrenome}
                </option>
              ))
            }
          </select>
        </div>
        <div className={`input-dentist ${theme}`}>
          <label className={`label-dentist ${theme}`} htmlFor="dentist">Dentista</label>
          <select className={`select-dentist ${theme}`} name="dentist" id="dentist">
            {
              dentistList.map((dentist) => (
                <option
                  className={`option-dentist ${theme}`}
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
          className={`date-time-shedule ${theme}`}
          type="datetime-local"
          name="dataShedule" id="dataShedule"
        />
        <button
          type="submit"
          className={`btn-submit-shedule ${theme}`}
          >
            enviar
        </button>
      </form>
    </div>
  )
}
