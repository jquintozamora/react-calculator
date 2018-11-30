import * as React from "react";
import { EqualExperts } from "../icons/EqualExperts";
import { StyledHeader } from "./styles";

const Header = (props: {}) => {
  return (
    <StyledHeader>
      <EqualExperts />
    </StyledHeader>
  );
};

export default Header;
