import Footer from "./Footer";
import Topo from "./Topo";
import Flashcards from "./Flashcards";
import React from "react";

let flashcards = [
    {titulo: "Pergunta 1", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"}, 
    {titulo: "Pergunta 2", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"}, 
    {titulo: "Pergunta 3", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"}, 
    {titulo: "Pergunta 4", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"}
];

export default function Tela2() {
    const [contador, setContador] = React.useState(0);
    const [icones, setIcone] = React.useState([]);
    let cor_icone = null;

    function aumentaContador() {
        setContador(contador + 1);
    }

    function adicionaIcone(icone, cor) {
        setIcone([...icones, icone]);
        cor_icone = cor;
    }

    return (
        <main className="tela2">
            <Topo/>
            <Conteudo aumentaContador={aumentaContador} adicionaIcone={adicionaIcone}/>
            <Footer contador={contador} icones={icones} cor={cor_icone} qtdCards={flashcards.length}/>
        </main>
    );
}

function Conteudo({aumentaContador, adicionaIcone}) {
    return(
        <section className="conteudo">
            {flashcards.map(flashcard => {
                const {titulo, pergunta, resposta} = flashcard;
                return <Flashcards key={titulo} titulo={titulo} pergunta={pergunta} resposta={resposta} aumentaContador={aumentaContador} adicionaIcone={adicionaIcone}/>
            })}
        </section>
    );
}