import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children: ReactNode | ReactNode[];
  element?: Element | DocumentFragment;
}

const Portal: React.FC<IPortalProps> = ({
  children,
  element = document.body,
}) => {
  return createPortal(children, element);
};

export default Portal;
