import { css } from "styled-components";

import { black, white } from "./colors";
import { primary } from "./fonts";

export default css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  a,
  abbr,
  acronym,
  address,
  article,
  aside,
  audio,
  blockquote,
  body,
  canvas,
  cite,
  code,
  dd,
  div,
  dl,
  dt,
  em,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  iframe,
  img,
  input,
  label,
  li,
  mark,
  nav,
  ol,
  pre,
  q,
  section,
  span,
  strong,
  sub,
  sup,
  table,
  tbody,
  td,
  textarea,
  tfoot,
  th,
  thead,
  time,
  tr,
  ul,
  video {
    margin: 0;
    padding: 0;
  }
  html {
    color: ${black};
    font-size: 10px;
    text-size-adjust: 100%;
    height: 100%;
  }
  body {
    font-family: ${primary};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: ${black};
    background: ${white};
    min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: visible;
  }
`;
