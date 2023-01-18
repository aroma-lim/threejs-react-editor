import { FC } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import * as modelSlice from "../../store/modelSlice";
import { Color } from "../../constants/color";
import { POSITION_MAX, POSITION_MIN } from "../../constants/Panel";
import EditSlider from "./EditSlider";

const ModelPanelWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: fixed;
  top: 70px;
  right: 10px;
  background: ${Color.DarkGray};
`;

const ModelPanelTitle = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 15px;
  color: ${Color.White};
`;

const ModelPanel: FC = () => {
  const dispatch = useAppDispatch();

  const size = useAppSelector(modelSlice.selectSize);
  const posX = useAppSelector(modelSlice.selectPosX);
  const posY = useAppSelector(modelSlice.selectPosY);
  const rotateX = useAppSelector(modelSlice.selectRotateX);
  const rotateY = useAppSelector(modelSlice.selectRotateY);
  const rotateZ = useAppSelector(modelSlice.selectRotateZ);

  return (
    <ModelPanelWrapper>
      <ModelPanelTitle>Model Configurator</ModelPanelTitle>
      <EditSlider
        min={1}
        max={30}
        label="Size"
        value={size}
        onChange={(value) => dispatch(modelSlice.setStoreSize(value))}
      />
      <EditSlider
        min={POSITION_MIN}
        max={POSITION_MAX}
        label="PosX"
        value={posX}
        onChange={(value) => dispatch(modelSlice.setStorePosX(value))}
      />
      <EditSlider
        min={POSITION_MIN}
        max={POSITION_MAX}
        label="PosY"
        value={posY}
        onChange={(value) => dispatch(modelSlice.setStorePosY(value))}
      />
      <EditSlider
        min={-Math.PI * 2}
        max={Math.PI * 2}
        label="RotateX"
        value={rotateX}
        onChange={(value) => dispatch(modelSlice.setStoreRotateX(value))}
      />
      <EditSlider
        min={-Math.PI * 2}
        max={Math.PI * 2}
        label="RotateY"
        value={rotateY}
        onChange={(value) => dispatch(modelSlice.setStoreRotateY(value))}
      />
      <EditSlider
        min={-Math.PI * 2}
        max={Math.PI * 2}
        label="RotateZ"
        value={rotateZ}
        onChange={(value) => dispatch(modelSlice.setStoreRotateZ(value))}
      />
    </ModelPanelWrapper>
  );
};

export default ModelPanel;
