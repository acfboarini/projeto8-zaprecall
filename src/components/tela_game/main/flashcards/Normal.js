export default function Normal({titulo, callback}) {
    return (
        <article className="normal">
            <h2>{titulo}</h2>
            <button onClick={() => callback()}>
                <ion-icon name="play-outline"></ion-icon>
            </button>
        </article>
    );
}