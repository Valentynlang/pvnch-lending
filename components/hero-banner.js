export default function HeroBanner() {
  return (
    <>
      <div className={"mt-0"}>
        <img src="/img_1.png" alt="" />
      </div>
      <div className={"columns is-mobile "}>
        <div className={"pl-4"}>
          <h1>
            KRAKOW <br />
            KLUB RE
          </h1>
        </div>
        <div className={"ml-6 mt-1"}>
          <h2>
            Ціна <br />
            Cena
          </h2>
        </div>
        <div className={"mt-4 ml-3"}>
          <h2>/ 50 zl</h2>
        </div>
      </div>
    </>
  );
}
