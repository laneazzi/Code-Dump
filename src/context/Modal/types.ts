export interface IModalContext {
  modal: boolean;
  closeModal: () => void;
  modalContent?: JSX.Element | null;
  openModal: (content?: JSX.Element) => void;
}

export type TModal = {
  children: React.ReactNode;
};
