import { FC, useRef } from "react";
import styled from "styled-components";
import { Color } from "../../constants/color";
import { BsPlus, BsUpload } from "react-icons/bs";
import TopMenuButton from "./TopMenuButton";

const TopMenuBarWrapper = styled.div`
  position: fixed;
  height: 60px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: ${Color.Gray};

  display: flex;
  align-items: center;
  padding-left: 16px;
  gap: 12px;
  z-index: 100;
`;

interface Props {
  onAddPoly: () => void;
  onAddModel: (url: string) => void;
}

const TopMenuBar: FC<Props> = (props: Props) => {
  const { onAddPoly, onAddModel } = props;

  const inputFile = useRef<HTMLInputElement | null>(null);

  const handleImport = () => {
    inputFile.current?.click();
  };

  const handleFileUpload = async (e: { target: { files: any } }) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      onAddModel(url);
    } catch {
      window.alert("Import error");
    }
  };

  return (
    <TopMenuBarWrapper>
      <TopMenuButton onClick={onAddPoly}>
        <BsPlus size={26} />
      </TopMenuButton>
      <TopMenuButton onClick={handleImport}>
        <BsUpload size={20} />
      </TopMenuButton>
      <input
        data-testid="file-input"
        style={{ display: "none" }}
        accept=".gltf, .glb"
        ref={inputFile}
        onChange={handleFileUpload}
        type="file"
      />
    </TopMenuBarWrapper>
  );
};

export default TopMenuBar;
