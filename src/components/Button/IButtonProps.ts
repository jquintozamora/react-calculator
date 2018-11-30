export interface IButtonProps {
  "data-name": string;
  onClick?: (event: IButtonMouseEvent) => void;
  expand?: boolean;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  hoverColor?: string
  selected?: boolean;
}

export interface IButtonContainerProps {
  expand?: boolean;
}

interface IButtonEventTarget extends EventTarget {
  dataset?: {
    name: string;
  };
}

export interface IButtonMouseEvent extends React.MouseEvent<HTMLElement> {
  target: IButtonEventTarget;
}
