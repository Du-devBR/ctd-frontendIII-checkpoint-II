import './style.sass'
import logo  from '../../assets/img/logo.png'
import logoDark from '../../assets/img/logo-dark.png'
// import { Home } from '../Home'
import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTheme } from '../../hooks/UseTheme/useTheme'


export function MainLayout(){

  const [ logout, setLogout] = useState(false)

  const { theme, changeTheme } = useTheme()

  const isDarkMode = theme === "dark" || false;

  console.log(theme)


  useEffect(() => {
    setLogout(localStorage.getItem('token'))
  })

  function logoutUser(){
    setLogout(false)
    localStorage.removeItem('token')
  }

  function changeThemePage(){
    if(theme === 'dark'){
      changeTheme('light')
    }else{
      changeTheme('dark')
    }
  }

  return(
    <div className={`container ${theme}`}>
      <header className={`container-header ${theme}`}>
        <div className="logo-dente-azul">
          <img src={isDarkMode ? logoDark : logo} alt="desenho de um dente na cor azul e a frente está escrito Dente azul clinica Odontologica" />
        </div>
        <div className="nav-btn">
          <div className={`container-btn-change-theme ${theme}`}>
            <button className={`btn-change-theme ${theme}`} onClick={changeThemePage}>{isDarkMode ? "🌙" : "☀"}</button>
          </div>
          <button className={`btn-login ${theme}`}>
                {
                  logout ? (
                    <span onClick={logoutUser}>logout</span>
                  ): (
                    <Link  to="auth">Login</Link>
                  )
                }
          </button>
        </div>
      </header>
      <aside className={`container-aside ${theme}`}>
        <div className={`aside-content ${theme}`}>
          <ul className="content">
            <li className={`item-list ${theme}`}>
              <Link className={`link-page ${theme}`}  to="home">Inicio</Link>
            </li>
            <li className={`item-list ${theme}`}>
              <Link className={`link-page ${theme}`}  to="fav">Favoritos</Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className={`container-main ${theme}`}>
        <div className={`main-content ${theme}`}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
