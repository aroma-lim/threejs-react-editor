import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import { FC } from "react";

const Background: FC = () => {
  return (
    <>
      <gridHelper args={[500, 100]} />
      <ambientLight intensity={0.3} color="#FFFFFF" />
      <pointLight intensity={1.0} position={[100, 100, 100]} />
      <OrbitControls />
    </>
  );
};
export default Background;
