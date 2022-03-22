export default function Frente({pergunta, callback}) {
    return (
        <article className="frente">
            <h3>{pergunta}</h3>
            <button onClick={() => callback()}>
                <img src="./images/setinha.png" alt=""/>
            </button>
        </article>
    );
}