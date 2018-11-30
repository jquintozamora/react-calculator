import Button from "..";
import { buildTestShallowRender, buildTestRender } from "../../../../test/unit/helpers/ComponentHelper";
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

describe("<Button />", () => {
  const renderComponent = buildTestShallowRender(Button);
  const defaultProps = {
    "data-name": "1",
    onClick: jest.fn(),
    expand: false,
    bgColor: lightGrey,
    color: eeBlue,
    borderColor: grey,
    hoverColor: grey,
    selected: false
  };

  describe("@renders", () => {
    it("should render default state", () => {
      expect(renderComponent().tree).toMatchSnapshot();
    });

    it("should render numeric button", () => {
      expect(
        renderComponent({ ...defaultProps, "data-name": "2", bgColor: lightBlack, color: white }).tree
      ).toMatchSnapshot();
    });

    it("should render operation button", () => {
      expect(
        renderComponent({
          ...defaultProps,
          "data-name": "+",
          bgColor: eeYellow,
          color: black,
          borderColor: eeDarkYellow,
          selected: false
        }).tree
      ).toMatchSnapshot();
    });

    it("should render operation button selected", () => {
      expect(
        renderComponent({
          ...defaultProps,
          "data-name": "-",
          bgColor: eeYellow,
          color: black,
          borderColor: eeDarkYellow,
          selected: true
        }).tree
      ).toMatchSnapshot();
    });

    it("should render others button", () => {
      expect(
        renderComponent({
          ...defaultProps,
          "data-name": "AC",
          bgColor: eeLightBlue,
          borderColor: eeBlue,
          color: eeDarkGrey,
          hoverColor: white
        }).tree
      ).toMatchSnapshot();
    });
  });

  describe("@events", () => {
    const renderComponentEv = buildTestRender(Button);
    it("should call onClick function", () => {
      const mockOnclick = jest.fn();
      const { root } = renderComponentEv({ ...defaultProps, onClick: mockOnclick });
      expect(mockOnclick).toHaveBeenCalledTimes(0);
      const button = root.find(el => el.props["data-name"] === "1");
      button.props.onClick();
      expect(mockOnclick).toHaveBeenCalledTimes(1);
    });
  });
});
