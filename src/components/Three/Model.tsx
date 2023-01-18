import { FC, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei/core/useGLTF";
import * as modelSlice from "../../store/modelSlice";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { setUuid } from "../../store/meshSlice";

interface Props {
  url: string;
}

const Model: FC<Props> = (props: Props) => {
  const { url } = props;
  const { scene } = useGLTF(url);
  const dispatch = useAppDispatch();

  const selectedUrl = useAppSelector(modelSlice.selectUrl);
  const selectedSize = useAppSelector(modelSlice.selectSize);
  const selectedPosX = useAppSelector(modelSlice.selectPosX);
  const selectedPosY = useAppSelector(modelSlice.selectPosY);
  const selectedRotateX = useAppSelector(modelSlice.selectRotateX);
  const selectedRotateY = useAppSelector(modelSlice.selectRotateY);
  const selectedRotateZ = useAppSelector(modelSlice.selectRotateZ);

  const [size, setSize] = useState<number>(1);
  const [posX, setPosX] = useState<number>(0);
  const [posY, setPosY] = useState<number>(0);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [rotateZ, setRotateZ] = useState<number>(0);

  const selectModel = () => {
    dispatch(modelSlice.setUrl(url));
    dispatch(modelSlice.setStoreSize(size));
    dispatch(modelSlice.setStorePosX(posX));
    dispatch(modelSlice.setStorePosY(posY));
    dispatch(modelSlice.setStoreRotateX(rotateX));
    dispatch(modelSlice.setStoreRotateY(rotateY));
    dispatch(modelSlice.setStoreRotateZ(rotateZ));
    dispatch(setUuid(""));
  };

  useEffect(() => {
    if (selectedUrl !== url) return;
    setSize(selectedSize);
    setPosX(selectedPosX);
    setPosY(selectedPosY);
    setRotateX(selectedRotateX);
    setRotateY(selectedRotateY);
    setRotateZ(selectedRotateZ);
  }, [
    selectedPosX,
    selectedPosY,
    selectedRotateX,
    selectedRotateY,
    selectedRotateZ,
    selectedSize,
    selectedUrl,
    url,
  ]);

  return (
    <mesh
      position={[posX, 0, posY]}
      scale={size}
      rotation={[rotateX, rotateY, rotateZ, "XYZ"]}
    >
      <primitive
        object={scene}
        onClick={(e: { stopPropagation: () => void }) => {
          e.stopPropagation();
          selectModel();
        }}
      />
    </mesh>
  );
};

export default Model;
