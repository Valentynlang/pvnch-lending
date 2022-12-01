import styles from "../styles/Box.module.css";

export default function CallToAction() {
  return (
    <>
      <div className={"columns ml-2 is-mobile"}>
        <h4>
          Перехід на сайт для покупки білетів <br />
          Przejdź do strony zakupu biletów
        </h4>
        <h3 className={"ml-2 mt-1"}>/ goout.net</h3>
      </div>
      <a href="https://goout.net/pl/bilety/pvnch/ucgq/" rel="nofollow noopener">
        <button className={`button pl-5 pr-5 ${styles.button} is-fullwidth`}>
          Bilet
        </button>
      </a>
    </>
  );
}
