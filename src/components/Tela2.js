export default function Tela2() {
    return (
        <main class="tela2">
            <Topo/>
            <Conteudo/>
        </main>
    );
}

function Topo() {
    return (
        <section className="topo">
            <img src="./images/logo-pequeno.png" alt=""/>
            <h1>ZapRecall</h1>
        </section>
    );
}

function Conteudo() {
    /*let perguntas = [{titulo: "Pergunta 1", }, {titulo: "Pergunta 1"}, {titulo: "Pergunta 1"}, {titulo: "Pergunta 1"}]*/
    return(
        <section className="conteudo">
            {}
        </section>
    );
}