import box from "../components/Box";
import Box from "../components/Box";
import Box2 from "../components/Box2";
import Box3 from "../components/Box3";
import Box4 from "../components/Box4";

// import styles from 'styles/Box.module.css'

const Index = () => {
  return (
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
  );
};

export default Index;
