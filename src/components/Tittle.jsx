import './Tittle.css'

function Tittle (props) {
    return <h1 className={props.darkMode%2 === 1 ? 'darkTittle' : 'lightTittle'}>Calculator</h1>
  }

  export default Tittle