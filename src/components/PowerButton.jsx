import './PowerButton.css'

function PowerButton ({switchPower}) {

    return (
        <div className="powerBtn" >
            <p>On</p>
            <label class="switch" >
                <input type="checkbox" onClick={switchPower}/>
                <span class="slider round"></span>
            </label>
            <p>Off</p>
        </div>
    )
}

export default PowerButton