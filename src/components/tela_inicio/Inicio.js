import React from "react";
import Game from "../tela_game/Game";

export default function Inicio() {

    const [status, setStatus] = React.useState(true);

    if(status){
        return (
            <Main callback={() => setStatus(false)}/>
        );
    }else{
        return <Game/>
    }
}

function Main({callback}) {
    return (
        <div className="inicio">
            <img src="./images/logo.png" alt=""/>
            <h1>ZapRecall</h1>
            <button onClick={() => callback()}>Iniciar Recall!</button>
        </div>
    );
}