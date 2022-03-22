import Flashcards from "./flashcards/Flashcards";

export default function Main({flashcards, aumentaContador, adicionaIcone}) {
    return(
        <main>
            {flashcards.map((flashcard, index) => {
                const {pergunta, resposta} = flashcard;
                const titulo = `Pergunta ${index+1}`;
                return <Flashcards key={index} titulo={titulo} pergunta={pergunta} resposta={resposta} aumentaContador={aumentaContador} adicionaIcone={adicionaIcone}/>
            })}
        </main>
    );
}