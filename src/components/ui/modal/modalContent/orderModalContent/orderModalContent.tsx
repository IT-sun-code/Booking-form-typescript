import React from "react";
import BookingForm from "../../../bookingForm";

interface IOrderModalContentProps {
  onConfirm: () => void;
}

const OrderModalContent: React.FC<IOrderModalContentProps> = ({
  onConfirm,
}) => {
  return (
    <>
      <BookingForm onConfirm={onConfirm} />
    </>
  );
};

export default OrderModalContent;
