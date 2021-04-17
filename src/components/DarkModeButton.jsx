import './DarkModeButton.css'
import Lightbulb_off from './Lightbulb_off.png'
import Lightbulb_on from './Lightbulb_on.png'

function DarkModeButton ({darkMode, switchDarkMode}) {
    return <img src={darkMode === true ? Lightbulb_on : Lightbulb_off} className="DarkMode-Btn" alt="Lightbulb" onClick={switchDarkMode}/>;       
}

export default DarkModeButton