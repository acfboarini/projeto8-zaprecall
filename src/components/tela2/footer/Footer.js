import React from "react";

export default function Footer({contador, icones, qtdCards}) {

    let texto = null;

    if(contador >= qtdCards) {
        if(validaRespostas(icones)){
            texto = 
            <>
                <h4><strong>Parabéns!</strong></h4>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </>
        }else{
            texto = 
            <>
                <h4><strong>Putz...</strong></h4>
                <p>Ainda faltam alguns...</p>
                <p>Mas não desanime!</p>
            </> 
        }
    }

    return (
        <footer>
            <div className="texto">{texto}</div>
            <div>
                <span>{contador}</span>/
                <span>{qtdCards}</span> Concluídos
            </div>

            <div>
                {icones.map((icone, index) => {
                    const key = `icone${index}`;
                    return (
                        <span className={icone} key={key}>
                            <ion-icon name={icone}></ion-icon>
                        </span>
                    );
                })}
            </div>
        </footer>
    );
}

function validaRespostas(icones) {
    let validar = true;
    icones.forEach(icone => {
        if(icone === "close-circle"){
            validar = false;
        }
    });
    return validar;
}