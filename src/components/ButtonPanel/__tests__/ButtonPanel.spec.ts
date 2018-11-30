import ButtonPanel from "..";
import {
  buildTestShallowRender,
  buildTestRender
} from "../../../../test/unit/helpers/ComponentHelper";

describe("<ButtonPanel />", () => {
  const renderComponent = buildTestShallowRender(ButtonPanel);
  const defaultProps = {
    onButtonClick: () => ({}),
    operator: null
  };

  describe("@renders", () => {
    it("should render default state", () => {
      expect(renderComponent().tree).toMatchSnapshot();
    });
    it("should render opacity when operator is selected", () => {
      expect(renderComponent({ ...defaultProps, operator: "+" }).tree).toMatchSnapshot();
    });
  });

  describe("@events", () => {
    const renderComponentEv = buildTestRender(ButtonPanel);
    it("should call onClick function", () => {
      const mockOnclick = jest.fn();
      const { root } = renderComponentEv({ ...defaultProps, onButtonClick: mockOnclick });
      expect(mockOnclick).toHaveBeenCalledTimes(0);
      const button = root.find(el => el.props["data-name"] === "1");
      button.props.onClick({ currentTarget: { dataset: { name: "1" } } });
      expect(mockOnclick).toHaveBeenCalledTimes(1);
      expect(mockOnclick).toHaveBeenCalledWith("1");
    });
  });
});
