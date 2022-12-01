import Box from "../components/Box";
import Box2 from "../components/Box2";
import Box3 from "../components/Box3";
import Box4 from "../components/Box4";
import Head from "next/head";

export async function getServerSideProps() {
  return {
    props: {
      meta: {
        name: 'facebook-domain-verification',
        content: 'bfadd8mluxvoi6c1tpp82w4w38e50y'
      }
    },
  };
}

const Index = (props) => {
  console.log(props);
  return (
    <>
      <Head>
        <meta
          name="facebook-domain-verification"
          content="bfadd8mluxvoi6c1tpp82w4w38e50y"
        />
      </Head>

      <div className={"container p-4"}>
        <div className="block">
          <Box />
        </div>

        <div className="block">
          <Box2 />
        </div>

        <div className="block">
          <Box3 />
        </div>

        <div className="block">
          <Box4 />
        </div>
      </div>
    </>
  );
};

export default Index;
