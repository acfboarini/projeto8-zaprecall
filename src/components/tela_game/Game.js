import React from "react";

import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Deck from "./Deck";

export default function Game() {
    const [contador, setContador] = React.useState(0);
    const [icones, setIcone] = React.useState([]);

    function aumentaContador() {
        setContador(contador + 1);
    }

    function adicionaIcone(icone) {
        setIcone([...icones, icone]);
    }

    let flashcards = Deck();

    return (
        <div className="game">
            <Header/>
            <Main flashcards={flashcards} aumentaContador={aumentaContador} adicionaIcone={adicionaIcone}/>
            <Footer contador={contador} icones={icones} qtdCards={flashcards.length}/>
        </div>
    );
}