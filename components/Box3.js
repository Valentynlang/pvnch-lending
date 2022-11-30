import styles from "../styles/Box.module.css";

export default function () {
  return (
    <>
      <h3>
        Перехід на сайт для покупки білетів Przejdź do strony zakupu biletów
      </h3>
      <h2 className={"mb-4"}>/ goout.net</h2>
      <a href="https://goout.net/pl/bilety/pvnch/ucgq/" rel="nofollow noopener">
        <button className={`button pl-6 pr-6 ${styles.button} is-fullwidth`}>
          BILET
        </button>
      </a>
    </>
  );
}
