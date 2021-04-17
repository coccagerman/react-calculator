import './Keypad.css';

function Keypad ({takeInput}) {

    // Callback function that sends the pressed key info to the calculator component
    function handleClick(e, className) {
        takeInput(e, className)
    }

    return (
        <div className='keyPad'>
            <div className="numbers">
                <button className="num" value='7' onClick={(e) => handleClick(e.target.value, e.target.className)}>7</button>
                <button className="num" value='8' onClick={(e) => handleClick(e.target.value, e.target.className)}>8</button>
                <button className="num" value='9' onClick={(e) => handleClick(e.target.value, e.target.className)}>9</button>
                <button className="num" value='4' onClick={(e) => handleClick(e.target.value, e.target.className)}>4</button>
                <button className="num" value='5' onClick={(e) => handleClick(e.target.value, e.target.className)}>5</button>
                <button className="num" value='6' onClick={(e) => handleClick(e.target.value, e.target.className)}>6</button>
                <button className="num" value='1' onClick={(e) => handleClick(e.target.value, e.target.className)}>1</button>
                <button className="num" value='2' onClick={(e) => handleClick(e.target.value, e.target.className)}>2</button>
                <button className="num" value='3' onClick={(e) => handleClick(e.target.value, e.target.className)}>3</button>
                <button className="num" value='0' onClick={(e) => handleClick(e.target.value, e.target.className)}>0</button>
                <button className="operator" value='.' onClick={(e) => handleClick(e.target.value, e.target.className)}>.</button>
                <button className="action" value='C' onClick={(e) => handleClick(e.target.value, e.target.className)}>C</button>
            </div>
            <div className="operators">
                <button className="operator rightSide-btn" value='*' onClick={(e) => handleClick(e.target.value, e.target.className)}>x</button>
                <button className="operator rightSide-btn" value='/' onClick={(e) => handleClick(e.target.value, e.target.className)}>÷</button>
                <button className="operator rightSide-btn" value='+' onClick={(e) => handleClick(e.target.value, e.target.className)}>+</button>
                <button className="operator rightSide-btn" value='-' onClick={(e) => handleClick(e.target.value, e.target.className)}>-</button>
                <button className="action rightSide-btn" value='AC' onClick={(e) => handleClick(e.target.value)}>AC</button>
                <button className="action rightSide-btn" value='=' onClick={(e) => handleClick(e.target.value)}>=</button>
            </div>
        </div>
    )
}

export default Keypad