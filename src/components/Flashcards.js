import React from "react";

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

function Normal({titulo, callback}) {
    return (
        <article className="normal">
            <h2>{titulo}</h2>
            <button onClick={() => callback()}>
                <ion-icon name="play-outline"></ion-icon>
            </button>
        </article>
    );
}

function Frente({pergunta, callback}) {
    return (
        <article className="frente">
            <h3>{pergunta}</h3>
            <button onClick={() => callback()}>
                <img src="./images/setinha.png" alt=""/>
            </button>
        </article>
    );
}

function Verso({resposta, callback, aumentaContador, adicionaIcone}) {
    const opcoes = [
        {cor: "vermelho", texto:"Não lembrei"}, 
        {cor: "amarelo", texto:"Quase não lembrei"}, 
        {cor: "verde", texto:"Zap!"}
    ];

    return (
        <article className="verso">
            <h3>{resposta}</h3>
            <div className="opcoes">

                {opcoes.map(opcao => {
                    const {cor, texto} = opcao;
                    return (
                        <button onClick={() => {
                            callback(cor);
                            aumentaContador();
                            enviaIcone(cor, adicionaIcone);
                        }} 
                            key={cor} 
                            className={cor}>{texto}</button>
                    );
                })}
            </div>
        </article>   
    );
}

function enviaIcone(cor, adicionaIcone) {
    if(cor === "vermelho"){
        adicionaIcone("close-circle");
    }else if(cor === "amarelo"){
        adicionaIcone("help-circle");
    }else{
        adicionaIcone("checkmark-circle");
    }
}

function Respondido({titulo, cor}) {

    let icone = null;
    const css = `respondido ${cor}`;
    
    if(cor === "vermelho"){     
        icone = <ion-icon name="close-circle"></ion-icon>;
    }else if(cor === "amarelo"){
        icone = <ion-icon name="help-circle"></ion-icon>;
    }else{
        icone = <ion-icon name="checkmark-circle"></ion-icon>;
    }
    return (
        <article className={css}>
            <h2>{titulo}</h2>
            {icone}
        </article>
    );
}