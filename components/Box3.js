import styles from "../styles/Box.module.css";

export default function () {
    return (
        <div className={"columns"}>
            <h3>Перехід на сайт для покупки білетів
                Przejdź do strony zakupu biletów
            </h3>
            <h2>/  goout.net</h2>
            <div >
                <button className={styles.button}><a href="https://goout.net/pl/bilety/pvnch/ucgq/">BILET</a></button>
            </div>
        </div>
    )
}