import styled from "styled-components";

import { eeLightBlue, lightBlack } from "../../styles/colors";

export const ResultsContainer = styled.div`
  background-color: ${lightBlack};
  padding: 20px;
  color: white;
  font-size: 3rem;
  text-align: right;
  border-bottom: 1px solid ${eeLightBlue};
  user-select: none;
`;
