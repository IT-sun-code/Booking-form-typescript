import { useState, useEffect, useCallback } from "react";

interface IModalState {
  modalOpen: boolean;
  modalVariety: string;
  handleModalOpen: (variety: string) => void;
  handleModalClose: () => void;
}

const useModal = (): IModalState => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalVariety, setModalVariety] = useState<string>("");

  const handleModalOpen = useCallback((variety: string): void => {
    setModalVariety(variety);
    setModalOpen(true);
  }, []);

  const handleModalClose = useCallback((): void => {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (modalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return {
    modalOpen,
    modalVariety,
    handleModalOpen,
    handleModalClose,
  };
};

export default useModal;
