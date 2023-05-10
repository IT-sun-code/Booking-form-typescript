import styles from "./button.module.css";
import cn from "classnames";
import React, { ReactNode, MouseEvent } from "react";

type ButtonAppearance = "ctv" | "reset" | "submit" | "cross";
type ButtonType = "reset" | "submit";

interface IButtonProps {
  children: ReactNode;
  appearance: ButtonAppearance;
  type?: ButtonType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({
  children,
  appearance,
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(styles.button, {
        [styles.buttonCtv]: appearance === "ctv",
        [styles.buttonReset]: appearance === "reset",
        [styles.buttonSubmit]: appearance === "submit",
        [styles.closeButton]: appearance === "cross",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
