import React from "react";
import styles from "./modal.module.css";
import { useState, useEffect } from "react";
import Portal from "../../../common/portal";
import OrderModalContent from "./modalContent/orderModalContent";
import SuccessModalContent from "./modalContent/successModalContent";
import Button from "../button";

interface IModalProps {
  variety: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<IModalProps> = ({ variety, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const [content, setContent] = useState<React.ReactNode>(
    variety === "booking" && (
      <OrderModalContent
        onConfirm={(): void => {
          setContent(<SuccessModalContent onClose={onClose} />);
        }}
      />
    )
  );

  const isOrderModalContent =
    React.isValidElement(content) && content.type === OrderModalContent;

  return (
    <Portal>
      <div className={isOpen ? styles.overlayOpen : ""} onClick={onClose}>
        <div
          className={isOpen ? styles.modalOpen : ""}
          onClick={(e) => e.stopPropagation()}
        >
          <Button appearance="cross" onClick={onClose}>
            {<div>×</div>}
          </Button>

          <div
            className={`${styles.containerContent} ${
              isOrderModalContent ? "" : styles.content
            }`}
          >
            {content}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
