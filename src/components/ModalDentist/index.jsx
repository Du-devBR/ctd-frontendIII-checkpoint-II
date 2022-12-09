import './style.sass'

export function ModalDentist(props){

  console.log(props)
  return(
    <div className={props.oncChangeModal ? 'container-modal-show' : 'container-modal-notShow'}>
      <h1>teste</h1>
      <h2>teste</h2>
    </div>
  )
}
