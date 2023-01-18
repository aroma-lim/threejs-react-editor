import { useProgress } from "@react-three/drei/core/useProgress";
import { Html } from "@react-three/drei/web/Html";
import { FC } from "react";
import { Spin } from "antd";
import { formatter } from "../../utils/math";

const Loader: FC = () => {
  const { progress } = useProgress();

  const value = formatter(progress);
  return (
    <Html center>
      <Spin size="large" tip={`${value} % loaded`} />
    </Html>
  );
};

export default Loader;
