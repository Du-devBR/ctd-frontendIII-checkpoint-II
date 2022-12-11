import './style.sass'
import logoLogin from '../../assets/img/logoLogin.png'
import { useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'

export function LoginUser(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  // const [ tokeStorage, setTokenStorage] = useLocalStorage('', 'token')

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
    if(res.ok){
      res.json()
      .then(data => {
      // setTokenStorage(data.token)
      localStorage.setItem('token', data.token)
      navigate('/home')
    })
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
          />
          <input className='input-password'
            type="text"
            placeholder='Senha'
            onChange={event => setPassword(event.target.value)}
          />
          <button className='btn-submit-login'
            type="submit"
            onClick={event => getUser(event)}
            >Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
