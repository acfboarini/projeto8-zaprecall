export default function Respondido({titulo, cor}) {

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