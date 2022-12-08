import './style.sass'
import logo  from '../../assets/img/logo.png'
import { Home } from '../Home'
import { Link, Outlet } from 'react-router-dom'

export function MainLayout(){
  return(
    <div className='container'>
      <header className='container-header'>
        <div className="logo-dente-azul">
          <img src={logo} alt="desenho de um dente na cor azul e a frente está escrito Dente azul clinica Odontologica" />
        </div>
      </header>
      <aside className="container-aside">
        <div className="aside-content">
          <ul className="content">
            <li className='item-list'>
              <Link  to="home">Home</Link>
            </li>
            <li className='item-list'>
              <Link  to="fav">Fav</Link>
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
