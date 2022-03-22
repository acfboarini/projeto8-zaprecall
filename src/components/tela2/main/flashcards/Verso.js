export default function Verso({resposta, callback, aumentaContador, adicionaIcone}) {
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