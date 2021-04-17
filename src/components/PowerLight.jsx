import './PowerLight.css';
function PowerLight ({power}) {

    return <div className={power === true ? 'on' : 'off'}></div>
}

export default PowerLight