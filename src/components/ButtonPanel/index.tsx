import * as React from "react";
import Button from "../Button";
import { IButtonMouseEvent } from "../Button/IButtonProps";
import { IButtonPanelProps } from "./IButtonPanelProps";
import { ButtonPanelContainer, ButtonPanelLine } from "./styles";

import {
  black,
  eeBlue,
  eeDarkGrey,
  eeDarkYellow,
  eeLightBlue,
  eeYellow,
  lightBlack,
  white
} from "../../styles/colors";

class ButtonPanel extends React.PureComponent<IButtonPanelProps, {}> {
  public render() {
    return (
      <ButtonPanelContainer>
        <ButtonPanelLine>
          <Button
            data-name="AC"
            onClick={this.handleClick}
            bgColor={eeLightBlue}
            borderColor={eeBlue}
            color={eeDarkGrey}
            hoverColor={white}
          />
          <Button
            data-name="+/-"
            onClick={this.handleClick}
            bgColor={eeLightBlue}
            borderColor={eeBlue}
            color={eeDarkGrey}
            hoverColor={white}
          />
          <Button
            data-name="%"
            onClick={this.handleClick}
            bgColor={eeLightBlue}
            borderColor={eeBlue}
            color={eeDarkGrey}
            hoverColor={white}
          />
          <Button
            data-name="÷"
            onClick={this.handleClick}
            bgColor={eeYellow}
            color={black}
            borderColor={eeDarkYellow}
            hoverColor={black}
            selected={this.props.operator === "÷"}
          />
        </ButtonPanelLine>
        <ButtonPanelLine>
          <Button
            data-name="7"
            onClick={this.handleClick}
            bgColor={lightBlack}
            color={white}
            hoverColor={black}
          />
          <Button
            data-name="8"
            onClick={this.handleClick}
            bgColor={lightBlack}
            color={white}
            hoverColor={black}
          />
          <Button
            data-name="9"
            onClick={this.handleClick}
            bgColor={lightBlack}
            color={white}
            hoverColor={black}
          />
          <Button
            data-name="x"
            onClick={this.handleClick}
            bgColor={eeYellow}
            color={black}
            borderColor={eeDarkYellow}
            hoverColor={black}
            selected={this.props.operator === "x"}
          />
        </ButtonPanelLine>
        <ButtonPanelLine>
          <Button
            data-name="4"
            onClick={this.handleClick}
            bgColor={lightBlack}
            color={white}
            hoverColor={black}
          />
          <Button
            data-name="5"
            onClick={this.handleClick}
            bgColor={lightBlack}
            color={white}
            hoverColor={black}
          />
          <Button
            data-name="6"
            onClick={this.handleClick}
            bgColor={lightBlack}
            color={white}
            hoverColor={black}
          />
          <Button
            data-name="-"
            onClick={this.handleClick}
            bgColor={eeYellow}
            color={black}
            borderColor={eeDarkYellow}
            hoverColor={black}
            selected={this.props.operator === "-"}
          />
        </ButtonPanelLine>
        <ButtonPanelLine>
          <Button
            data-name="1"
            onClick={this.handleClick}
            bgColor={lightBlack}
            color={white}
            hoverColor={black}
          />
          <Button
            data-name="2"
            onClick={this.handleClick}
            bgColor={lightBlack}
            color={white}
            hoverColor={black}
          />
          <Button
            data-name="3"
            onClick={this.handleClick}
            bgColor={lightBlack}
            color={white}
            hoverColor={black}
          />
          <Button
            data-name="+"
            onClick={this.handleClick}
            bgColor={eeYellow}
            color={black}
            borderColor={eeDarkYellow}
            hoverColor={black}
            selected={this.props.operator === "+"}
          />
        </ButtonPanelLine>
        <ButtonPanelLine>
          <Button
            data-name="0"
            onClick={this.handleClick}
            expand={true}
            bgColor={lightBlack}
            color={white}
            hoverColor={black}
          />
          <Button data-name="." onClick={this.handleClick} bgColor={lightBlack} color={white} />
          <Button
            data-name="="
            onClick={this.handleClick}
            bgColor={eeYellow}
            color={black}
            borderColor={eeDarkYellow}
            hoverColor={black}
          />
        </ButtonPanelLine>
      </ButtonPanelContainer>
    );
  }

  private handleClick = (ev: IButtonMouseEvent) => {
    const buttonName = ev.currentTarget.dataset.name;
    if (buttonName) {
      this.props.onButtonClick(buttonName);
    }
  };
}

export default ButtonPanel;
