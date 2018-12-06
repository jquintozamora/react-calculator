import * as React from "react";
import { eeBlue, grey, lightGrey, black } from "../../styles/colors";
import { IButtonProps } from "./IButtonProps";
import { ButtonContainer, RoundedButton } from "./styles";

export const Button = (props: IButtonProps) => {
  const { expand, ...rest } = props;
  return (
    <ButtonContainer expand={expand}>
      <RoundedButton {...rest}>{props["data-name"]}</RoundedButton>
    </ButtonContainer>
  );
};

Button.defaultProps = {
  bgColor: lightGrey,
  color: eeBlue,
  borderColor: grey,
  hoverColor: black
};

export default React.memo(Button);
