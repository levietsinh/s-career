import * as React from "react";
import "./GlobalStyles.scss";

type Props = {
  children?: React.ReactNode
}

const GlobalStyles = ({children}: Props) => {
  return children;
};
export default GlobalStyles;
