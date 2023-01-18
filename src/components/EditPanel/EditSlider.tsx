import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Color } from "../../constants/color";
import { Slider } from "antd";
import { useAppDispatch } from "../../hook/hooks";
import {
  setHeight,
  setPosX,
  setPosY,
  setRadius,
  setSides,
} from "../../store/meshSlice";
import { formatter } from "../../utils/math";

const EditSliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const EditSliderLabel = styled.div`
  margin-left: 2px;
  font-size: 14px;
  color: ${Color.White};
`;

const EditSlider = styled(Slider)`
  .ant-slider-rail {
    background: ${Color.White};
  }
  &:hover {
    .ant-slider-rail {
      border: 2px solid ${Color.White};
    }
  }
`;

interface Props {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}

const EditPanel: FC<Props> = (props: Props) => {
  const { label, value, min, max, onChange } = props;

  const [currValue, setCurrValue] = useState<number>(value);

  useEffect(() => {
    setCurrValue(value);
  }, [value]);

  return (
    <EditSliderWrapper>
      <EditSliderLabel>{label}</EditSliderLabel>
      <EditSlider
        min={min}
        max={max}
        onChange={(val) => setCurrValue(val)}
        onAfterChange={(value) => onChange(value)}
        value={currValue}
        tooltip={{ formatter }}
      />
    </EditSliderWrapper>
  );
};

export default EditPanel;
