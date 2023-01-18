import { FC } from "react";
import styled from "styled-components";
import { Color } from "../../constants/color";

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  gap: 4px;
  min-width: 72px;
  height: 100%;

  background: ${Color.Gray};

  border-block: none;
  border-inline: none;

  color: ${Color.White};

  :hover {
    background: ${Color.Black};
    cursor: pointer;
  }

  :active {
    background: ${Color.Black};
    cursor: pointer;
  }
`;

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
}

const TopMenuButton: FC<Props> = (props: Props) => {
  const { children, ...otherProps } = props;
  return <ButtonWrapper {...otherProps}>{children}</ButtonWrapper>;
};

export default TopMenuButton;
