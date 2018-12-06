import * as React from "react";
import { ReactLogo } from "../icons/ReactLogo";
import { StyledHeader } from "./styles";

const Header = (props: {}) => {
  return (
    <StyledHeader>
      <ReactLogo />
    </StyledHeader>
  );
};

export default React.memo(Header);
