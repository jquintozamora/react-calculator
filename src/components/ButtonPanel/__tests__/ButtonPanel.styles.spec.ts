import { ButtonPanelContainer, ButtonPanelLine } from "../styles";
import { buildTestRender } from "../../../../test/unit/helpers/ComponentHelper";

describe("@ styled components", () => {
  describe("<ButtonPanelContainer />", () => {
    const renderComponent = buildTestRender(ButtonPanelContainer);
    it("applies default styles", () => {
      const { tree } = renderComponent();
      expect(tree).toHaveStyleRule("padding", "10px");
    });
  });

  describe("<ButtonPanelLine />", () => {
    const renderComponent = buildTestRender(ButtonPanelLine);
    it("applies default styles", () => {
      const { tree } = renderComponent();
      expect(tree).toHaveStyleRule("display", "flex");
    });
  });
});
