import styled from "styled-components";
import { ifProp, prop } from "styled-tools";
import { IButtonContainerProps, IButtonProps } from "./IButtonProps";

export const ButtonContainer = styled.div<IButtonContainerProps>`
  flex: ${ifProp({ expand: true }, "2", "1")};
`;

export const RoundedButton = styled.div<IButtonProps>`
  background-color: ${prop("bgColor")};
  color: ${prop("color")};
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  border: 1px solid ${prop("borderColor")};
  margin: 5px;
  line-height: 50px;
  user-select: none;
  opacity: ${ifProp({ selected: true }, "0.5", "1")};

  &:hover {
    background-color: ${prop("borderColor")};
    color: ${prop("hoverColor")};
  }
`;
