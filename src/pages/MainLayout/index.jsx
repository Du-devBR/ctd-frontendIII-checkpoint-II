import './style.sass'
import logo  from '../../assets/img/logo.png'

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

        </div>
      </aside>
      <main className="container-main">
        <div className="main-content">
          
        </div>
      </main>
    </div>
  )
}
