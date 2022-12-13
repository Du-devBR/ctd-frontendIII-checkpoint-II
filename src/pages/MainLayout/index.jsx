import './style.sass'
import logo  from '../../assets/img/logo.png'
import { Home } from '../Home'
import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function MainLayout(){

  const [ logout, setLogout] = useState(false)

  useEffect(() => {
    setLogout(localStorage.getItem('token'))
  })

  function logoutUser(){
    setLogout(false)
    localStorage.removeItem('token')
  }

  console.log(logout)
  return(
    <div className='container'>
      <header className='container-header'>
        <div className="logo-dente-azul">
          <img src={logo} alt="desenho de um dente na cor azul e a frente está escrito Dente azul clinica Odontologica" />
        </div>
        <button className='btn-login'>
              {
                logout ? (
                  <span onClick={logoutUser}>logout</span>
                ): (
                  <Link  to="auth">Login</Link>
                )
              }
        </button>
      </header>
      <aside className="container-aside">
        <div className="aside-content">
          <ul className="content">
            <li className='item-list'>
              <Link  to="home">Inicio</Link>
            </li>
            <li className='item-list'>
              <Link  to="fav">Favoritos</Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className="container-main">
        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
