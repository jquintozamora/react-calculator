import { css, InterpolationValue } from "styled-components";
import breakpoints from "./breakpoints";

const { lg, md, sm, xl, xs } = breakpoints;

const query = (size: number) => (style: string | InterpolationValue[]) =>
  css`
    @media (min-width: ${size}px) {
      ${style};
    }
  `;

export const fromExtraSmall = query(xs);
export const fromSmall = query(sm);
export const fromMedium = query(md);
export const fromLarge = query(lg);
export const fromExtraLarge = query(xl);
