import * as React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import TestRenderer from "react-test-renderer";

export function buildTestShallowRender<P extends object>(Component: React.ComponentType<P>) {
  return ({ children = null, ...props }: any = {}) => {
    const shallowRenderer = ShallowRenderer.createRenderer();
    shallowRenderer.render(<Component {...props}> {children} </Component>);
    return {
      renderer: shallowRenderer,
      instance: shallowRenderer.getMountedInstance(),
      tree: shallowRenderer.getRenderOutput()
    };
  };
}

export function buildTestRender<P extends object>(Component: React.ComponentType<P>) {
  return ({ children = null, ...props }: any = {}) => {
    const testRenderer = TestRenderer.create(<Component {...props}> {children} </Component>);
    return {
      renderer: testRenderer,
      root: testRenderer.root,
      instance: testRenderer.getInstance(), // It is only available for class components
      tree: testRenderer.toJSON()
    };
  };
}
