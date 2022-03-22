import React from "react";

import Normal from "./Normal";
import Frente from "./Frente";
import Verso from "./Verso";
import Respondido from "./Respondido";


export default function Flashcards({titulo, pergunta, resposta, aumentaContador, adicionaIcone}) {

    const [carta, setCarta] = React.useState(0);
    const [cor, setCor] = React.useState(null);

    if(carta === 0){
        return <Normal titulo={titulo} callback={() => setCarta(1)}/>
    }else if(carta === 1){
        return <Frente pergunta={pergunta} callback={() => setCarta(2)}/>
    }else if(carta === 2){
        return <Verso resposta={resposta} aumentaContador={aumentaContador} adicionaIcone={adicionaIcone} callback={cor => {
            setCarta(3);
            setCor(cor);
        }}/> 
    }else {
        return <Respondido titulo={titulo} cor={cor}/>
    }
}