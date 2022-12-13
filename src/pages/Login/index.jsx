import './style.sass'
import logoLogin from '../../assets/img/logoLogin.png'
import { useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'


export function LoginUser(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [validation, setValidation] = useState(false)

  console.log(validation)

  function validationForm(){
    if(password.length >= 5){
      setValidation(false)
    }else{
      setValidation(true)
    }
  }

  function getUser(event){
    event.preventDefault()
    const user = {
      username: email,
      password: password
    }

    const requestHeaders = {
      'Content-Type': 'application/json'

    }

    const requestConfig = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: requestHeaders
    }

    fetch('http://dhodonto.ctdprojetos.com.br/auth', requestConfig)
    .then(res => {
      if(res.status === 200) {
        // setValidation(false)
        if(res.ok){
          res.json()
          .then(data => {
          localStorage.setItem('token', data.token)
          // navigate('/home')
          })
        }
      }else{
        // setValidation(true)
      }
    })
  }


  return(
    <div className='container-login'>
      <div action="" className='container-content-form'>
        <img src={logoLogin} alt="desenho de um dente na cor azul e a frente está escrito Dente azul clinica Odontologica" />
        <div className="title-form">
          <h1>Seja bem vindo novamente</h1>
          <span>Digite os dados abaixo para realizar seu login</span>
        </div>
        <form action="" className='form'>
          <input className='input-email'
            type="text"
            placeholder='Email'
            onChange={event => setEmail(event.target.value)}
            minLength={6}
            required={true}
            value={email}
          />
          <input className={validation ? 'error-form' : 'input-password'}
            type="text"
            placeholder='Senha'
            onChange={event => setPassword(event.target.value)}
            minLength={6}
            required={true}
            value={password}
          />
          <button className='btn-submit-login'
            type="submit"
            onClick={event => getUser(event)}
            disabled={password.length <=5 || email.length <=5}
            >Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
