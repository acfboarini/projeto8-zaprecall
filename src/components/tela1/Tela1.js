import React from "react";
import Tela2 from "./../tela2/Tela2";

export default function Tela1() {

    const [status, setStatus] = React.useState(true);

    if(status){
        return (
            <Main callback={() => setStatus(false)}/>
        );
    }else{
        return <Tela2/>
    }
}

function Main({callback}) {
    return (
        <div className="tela1">
            <img src="./images/logo.png" alt=""/>
            <h1>ZapRecall</h1>
            <button onClick={() => callback()}>Iniciar Recall!</button>
        </div>
    );
}