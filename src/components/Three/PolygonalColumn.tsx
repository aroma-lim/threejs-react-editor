import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import * as meshSlice from "../../store/meshSlice";
import { setUrl } from "../../store/modelSlice";
import { Color } from "../../constants/color";

interface Props {
  pc: number;
}

const PolygonalColumn: FC<Props> = (props: Props) => {
  const { pc } = props;
  const dispatch = useAppDispatch();

  const selectedUuid = useAppSelector(meshSlice.selectUuid);
  const selectedRadius = useAppSelector(meshSlice.selectRadius);
  const selectedHeight = useAppSelector(meshSlice.selectHeight);
  const selectedSides = useAppSelector(meshSlice.selectSides);
  const selectedPosX = useAppSelector(meshSlice.selectPosX);
  const selectedPosY = useAppSelector(meshSlice.selectPosY);
  const selectedColor = useAppSelector(meshSlice.selectColor);

  const [id, setId] = useState<string>();
  const [newRadius, setNewRadius] = useState<number>(5);
  const [newHeight, setNewHeight] = useState<number>(20);
  const [newSides, setNewSides] = useState<number>(8);
  const [newPosX, setNewPosX] = useState<number>(0);
  const [newPosY, setNewPosY] = useState<number>(pc * 10);
  const [newColor, setNewColor] = useState<string>(Color.Mint);

  const selectMesh = (uuid: string) => {
    dispatch(meshSlice.setUuid(uuid));
    dispatch(meshSlice.setRadius(newRadius));
    dispatch(meshSlice.setHeight(newHeight));
    dispatch(meshSlice.setSides(newSides));
    dispatch(meshSlice.setPosX(newPosX));
    dispatch(meshSlice.setPosY(newPosY));
    dispatch(meshSlice.setColor(newColor));
    setId(uuid);
    dispatch(setUrl(""));
  };

  useEffect(() => {
    if (selectedUuid !== id) return;
    setNewRadius(selectedRadius);
    setNewHeight(selectedHeight);
    setNewSides(selectedSides);
    setNewPosX(selectedPosX);
    setNewPosY(selectedPosY);
    setNewColor(selectedColor);
  }, [
    id,
    selectedColor,
    selectedHeight,
    selectedPosX,
    selectedPosY,
    selectedRadius,
    selectedSides,
    selectedUuid,
  ]);

  return (
    <mesh
      visible
      position={[newPosX, newHeight / 2, newPosY]}
      onClick={(e) => {
        e.stopPropagation();
        selectMesh(e.object.uuid);
      }}
    >
      <cylinderGeometry args={[newRadius, newRadius, newHeight, newSides]} />
      <meshPhongMaterial color={newColor} emissive={Color.DarkGray} />
    </mesh>
  );
};

export default PolygonalColumn;
