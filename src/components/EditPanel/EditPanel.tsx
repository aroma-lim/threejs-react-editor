import { FC, useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import * as meshSlice from "../../store/meshSlice";
import { Color } from "../../constants/color";
import { POSITION_MAX, POSITION_MIN } from "../../constants/Panel";
import EditSlider from "./EditSlider";
import { ColorPicker, toColor, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const EditPanelWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: fixed;
  top: 70px;
  right: 10px;
  background: ${Color.DarkGray};
`;

const EditPanelTitle = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 15px;
  color: ${Color.White};
`;

const EditPanel: FC = () => {
  const dispatch = useAppDispatch();

  const radius = useAppSelector(meshSlice.selectRadius);
  const height = useAppSelector(meshSlice.selectHeight);
  const sides = useAppSelector(meshSlice.selectSides);
  const posX = useAppSelector(meshSlice.selectPosX);
  const posY = useAppSelector(meshSlice.selectPosY);
  const selectedColor = useAppSelector(meshSlice.selectColor);

  const [color, setColor] = useColor("hex", selectedColor);

  useEffect(() => {
    dispatch(meshSlice.setColor(color.hex));
  }, [color, dispatch]);

  useEffect(() => {
    setColor(toColor("hex", selectedColor));
  }, [selectedColor, setColor]);

  return (
    <EditPanelWrapper>
      <EditPanelTitle>Edit Polygonal Column</EditPanelTitle>
      <EditSlider
        min={1}
        max={30}
        label="Radius"
        value={radius}
        onChange={(value) => dispatch(meshSlice.setRadius(value))}
      />
      <EditSlider
        min={1}
        max={30}
        label="Height"
        value={height}
        onChange={(value) => dispatch(meshSlice.setHeight(value))}
      />
      <EditSlider
        min={3}
        max={30}
        label="Sides"
        value={sides}
        onChange={(value) => dispatch(meshSlice.setSides(value))}
      />
      <EditSlider
        min={POSITION_MIN}
        max={POSITION_MAX}
        label="PosX"
        value={posX}
        onChange={(value) => dispatch(meshSlice.setPosX(value))}
      />
      <EditSlider
        min={POSITION_MIN}
        max={POSITION_MAX}
        label="PosY"
        value={posY}
        onChange={(value) => dispatch(meshSlice.setPosY(value))}
      />
      <ColorPicker
        width={250}
        height={100}
        color={color}
        onChange={setColor}
        hideHSV
        hideRGB
        dark
      />
    </EditPanelWrapper>
  );
};

export default EditPanel;
