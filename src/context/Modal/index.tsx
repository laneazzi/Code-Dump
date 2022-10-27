import { createContext } from 'react';

import useModal from 'hooks/useModal';
import Modal from 'components/shared/Modal';

import { IModalContext } from './types';

export const ModalContext = createContext<IModalContext>({
  modal: false,
  modalContent: null,
  openModal: () => {},
  closeModal: () => {},
});

type TModal = {
  children: React.ReactNode;
};

export const ModalContextProvider: React.FC<TModal> = ({ children }) => {
  const useModalReturn = useModal();

  return (
    <ModalContext.Provider value={useModalReturn}>
      <div className='modal-back-content'>
        <Modal />
        {children}
      </div>

      <div id='modal-root' />
    </ModalContext.Provider>
  );
};
