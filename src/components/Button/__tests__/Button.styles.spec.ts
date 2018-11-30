import { ButtonContainer, RoundedButton } from "../styles";
import { buildTestRender } from "../../../../test/unit/helpers/ComponentHelper";
import {
  eeBlue,
  eeLightBlue,
  eeDarkYellow,
  eeYellow,
  eeDarkGrey,
  grey,
  lightGrey,
  lightBlack,
  white,
  black
} from "../../../styles/colors";

describe("@ styled components", () => {
  describe("<ButtonContainer />", () => {
    const renderComponent = buildTestRender(ButtonContainer);
    const defaultProps = {
      expand: false
    };

    it("applies default styles", () => {
      const { tree } = renderComponent(defaultProps);
      expect(tree).toHaveStyleRule("flex", "1");
    });

    it("applies expand styles", () => {
      const { tree } = renderComponent({ ...defaultProps, expand: true });
      expect(tree).toHaveStyleRule("flex", "2");
    });
  });

  describe("<RoundedButton />", () => {
    const renderComponent = buildTestRender(RoundedButton);
    const defaultProps = {
      bgColor: lightGrey,
      color: eeBlue,
      borderColor: grey,
      selected: false,
      hoverColor: "black"
    };

    it("applies default styles", () => {
      const { tree } = renderComponent(defaultProps);
      expect(tree).toHaveStyleRule("background-color", "#f5f5f5");
      expect(tree).toHaveStyleRule("color", "#1795d4");
      expect(tree).toHaveStyleRule("cursor", "pointer");
      expect(tree).toHaveStyleRule("font-size", "3rem");
      expect(tree).toHaveStyleRule("font-weight", "bold");
      expect(tree).toHaveStyleRule("text-align", "center");
      expect(tree).toHaveStyleRule("border", "1px solid #949494");
      expect(tree).toHaveStyleRule("margin", "5px");
      expect(tree).toHaveStyleRule("line-height", "50px");
      expect(tree).toHaveStyleRule("user-select", "none");
      expect(tree).toHaveStyleRule("opacity", "1");
      expect(tree).toHaveStyleRule("background-color", "#949494", {
        modifier: ":hover"
      });
      expect(tree).toHaveStyleRule("color", "black", {
        modifier: ":hover"
      });
    });

    it("applies numeric button styles", () => {
      const { tree } = renderComponent({
        ...defaultProps,
        bgColor: lightBlack,
        color: white,
        hoverColor: black
      });
      expect(tree).toHaveStyleRule("background-color", "#373d45");
      expect(tree).toHaveStyleRule("color", "#FFFFFF");
      expect(tree).toHaveStyleRule("border", "1px solid #949494");
      expect(tree).toHaveStyleRule("opacity", "1");
      expect(tree).toHaveStyleRule("background-color", "#949494", {
        modifier: ":hover"
      });
      expect(tree).toHaveStyleRule("color", "#000000", {
        modifier: ":hover"
      });
    });

    it("applies operation button styles", () => {
      const { tree } = renderComponent({
        ...defaultProps,
        bgColor: eeYellow,
        color: black,
        borderColor: eeDarkYellow,
        hoverColor: black
      });
      expect(tree).toHaveStyleRule("background-color", "#fed800");
      expect(tree).toHaveStyleRule("color", "#000000");
      expect(tree).toHaveStyleRule("border", "1px solid #d4b526");
      expect(tree).toHaveStyleRule("opacity", "1");
      expect(tree).toHaveStyleRule("background-color", "#d4b526", {
        modifier: ":hover"
      });
      expect(tree).toHaveStyleRule("color", "#000000", {
        modifier: ":hover"
      });
    });

    it("applies selected operation button styles", () => {
      const { tree } = renderComponent({
        ...defaultProps,
        bgColor: eeYellow,
        color: black,
        borderColor: eeDarkYellow,
        hoverColor: black,
        selected: true
      });
      expect(tree).toHaveStyleRule("opacity", "0.5");
    });

    it("applies other (top window) operation button styles", () => {
      const { tree } = renderComponent({
        ...defaultProps,
        bgColor: eeLightBlue,
        color: eeDarkGrey,
        borderColor: eeBlue,
        hoverColor: white
      });
      expect(tree).toHaveStyleRule("background-color", "#cdeeff");
      expect(tree).toHaveStyleRule("color", "#666");
      expect(tree).toHaveStyleRule("border", "1px solid #1795d4");
      expect(tree).toHaveStyleRule("opacity", "1");
      expect(tree).toHaveStyleRule("background-color", "#1795d4", {
        modifier: ":hover"
      });
      expect(tree).toHaveStyleRule("color", "#FFFFFF", {
        modifier: ":hover"
      });
    });
  });
});
