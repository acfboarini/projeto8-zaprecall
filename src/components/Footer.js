import React from "react";

function Footer({contador, icones, qtdCards}) {

    let texto = null;

    if(contador >= qtdCards) {
        if(validaRespostas(icones)){
            texto = 
            <>
                <h4>Parabéns!</h4>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </>
        }else{
            texto = 
            <>
                <h4>Putz...</h4>
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
                <span>4</span> Concluidos
            </div>

            <div>
                {icones.map(icone => {
                    return (
                        <span className={icone}>
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

export default Footer;