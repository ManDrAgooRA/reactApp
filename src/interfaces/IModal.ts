export interface IModal {
  isOpen: boolean;
  message: string;
  handleClose(): void;
}

export interface IPaymentModal {
  paymentModal: boolean;
  handleClose(): void;
}
