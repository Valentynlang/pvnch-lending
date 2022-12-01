import styles from '../styles/Box.module.css';

export default function Footer() {
  return (
    <div className={"columns is-mobile"}>
      <div className="column">
        <div className={styles.border}></div>
        <div className={`columns pt-5 pl-3 pb-6`}>
          <img className={styles.icon} src="/konopi-img.png" alt="" />
          <img className={styles.icon} src="/cbd-img.png" alt="" />
          <img className={styles.icon} src="/p-img.png" alt="" />
          <img className={styles.icon} src="/ua-img.png" alt="" />
          <img className={styles.icon} src="/re-img.png" alt="" />
        </div>
      </div>
      <div className="column">
        <div className={styles.border}></div>
        <div className={"pt-4 has-text-right"}>
          <h4>
            ul.świętego Kryza 4,
            <br />
            31 -027 Krakow
          </h4>
        </div>
      </div>
    </div>
  );
}
