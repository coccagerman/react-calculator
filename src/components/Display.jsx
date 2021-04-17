import { useEffect } from 'react';
import './Display.css';

function Display ({input, setLastCharacter}) {

    useEffect (() => {
        setLastCharacter(input.slice(-1))
    })

    return <div className="display">{input}</div>

}

export default Display