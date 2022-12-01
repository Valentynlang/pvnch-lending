import Head from "next/head";
import Footer from '../components/footer';
import Info from '../components/info';
import CallToAction from '../components/call-to-action';
import Logo from '../components/logo';
import HeroBanner from '../components/hero-banner';

export async function getServerSideProps() {
  return {
    props: {
      meta: {
        name: "facebook-domain-verification",
        content: "bfadd8mluxvoi6c1tpp82w4w38e50y",
      },
    },
  };
}

const Index = (props) => {
  return (
    <>
      <Head>
        <meta
          name="facebook-domain-verification"
          content="bfadd8mluxvoi6c1tpp82w4w38e50y"
        />
      </Head>

      <div className={"container p-3 is-mobile"}>
        <div className="block">
          <Logo />
        </div>

        <div className="block">
          <HeroBanner />
        </div>

        <div className="block">
          <CallToAction />
        </div>

        <div className="block">
          <Info/>
        </div>

        <div className="block">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
