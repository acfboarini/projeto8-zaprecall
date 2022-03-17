export default function Tela2() {
    return (
        <main className="tela2">
            <Topo/>
            <Conteudo/>
            <Footer/>
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
    let perguntas = [{titulo: "Pergunta 1", }, {titulo: "Pergunta 2"}, {titulo: "Pergunta 3"}, {titulo: "Pergunta 4"}]
    return(
        <section className="conteudo">
            {perguntas.map(pergunta => {
                return <Pergunta key={pergunta.titulo} titulo={pergunta.titulo}/>
            })}
        </section>
    );
}

function Pergunta({titulo}) {
    return (
        <article>
            <h2>{titulo}</h2>
            <ion-icon name="play-outline"></ion-icon>
        </article>
    );
}

function Footer() {
    return (
        <footer>
            
        </footer>
    );
}