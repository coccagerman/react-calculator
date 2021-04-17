import React, { useState } from 'react';
import './Calculator.css';
import Keypad from './Keypad'
import Display from './Display'
import PowerButton from './PowerButton'
import PowerLight from './PowerLight'

function Calculator () {

    // Hook and function used for power button and light
    const [power, setPower] = useState(false);

    function switchPower() {
        setPower(!power)
        power === true ? setInput('') : setInput('0')
    }

    // Hook used to hold the last character entered in the input
    const [lastCharacter, setLastCharacter] = useState('0');

    // Hook and function used to display user inputs
    const [input, setInput] = useState('');

    function takeInput(pressedBtn, className) {

        if (power === false) { }
        else {

            if (
                (pressedBtn === '.' && lastCharacter === '+') ||
                (pressedBtn === '.' && lastCharacter === '-') ||
                (pressedBtn === '.' && lastCharacter === '/') ||
                (pressedBtn === '.' && lastCharacter === '*') ||
                (pressedBtn === '.' && lastCharacter === '.') ||
        
                (pressedBtn === '+' && lastCharacter === '+') ||
                (pressedBtn === '+' && lastCharacter === '-') ||
                (pressedBtn === '+' && lastCharacter === '/') ||
                (pressedBtn === '+' && lastCharacter === '*') ||
                (pressedBtn === '+' && lastCharacter === '.') ||
        
                (pressedBtn === '-' && lastCharacter === '+') ||
                (pressedBtn === '-' && lastCharacter === '-') ||
                (pressedBtn === '-' && lastCharacter === '/') ||
                (pressedBtn === '-' && lastCharacter === '*') ||
                (pressedBtn === '-' && lastCharacter === '.') ||
        
                (pressedBtn === '*' && lastCharacter === '+') ||
                (pressedBtn === '*' && lastCharacter === '-') ||
                (pressedBtn === '*' && lastCharacter === '/') ||
                (pressedBtn === '*' && lastCharacter === '*') ||
                (pressedBtn === '*' && lastCharacter === '.') ||
        
                (pressedBtn === '/' && lastCharacter === '+') ||
                (pressedBtn === '/' && lastCharacter === '-') ||
                (pressedBtn === '/' && lastCharacter === '/') ||
                (pressedBtn === '/' && lastCharacter === '*') ||
                (pressedBtn === '/' && lastCharacter === '.') ||

                (pressedBtn === '=' && lastCharacter === '+') ||
                (pressedBtn === '=' && lastCharacter === '-') ||
                (pressedBtn === '=' && lastCharacter === '/') ||
                (pressedBtn === '=' && lastCharacter === '*') ||
                (pressedBtn === '=' && lastCharacter === '.')
            ) { }

            else if (className === 'num' && input === '0') {
                setInput(pressedBtn)
            } else if ((className === 'operator' || className === 'operator rightSide-btn') || (className === 'num' && input !== '0')) {
                setInput(input + pressedBtn)
            } else if (pressedBtn === 'AC') {
                setInput('0')
            } else if (pressedBtn === 'C') {
                input.length === 1 ? setInput('0') : setInput(input.slice(0, input.length - 1))
            } else if (pressedBtn === '=') {
                setInput(eval(input).toString())
            } 

        }
    }

    return (
        <div className="calculator">
            <PowerButton switchPower={switchPower}/>
            <PowerLight power={power} />
            <Display input={input} setLastCharacter={setLastCharacter}/>
            <Keypad takeInput={takeInput}/>
        </div>
    )
}

export default Calculator