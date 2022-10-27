import { useState } from 'react';

import useLockedBody from 'hooks/useLockedBody';
import { IModalContext } from 'context/Modal/types';

const useModal = (): IModalContext => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<IModalContext['modalContent']>(null);

  useLockedBody(modal);

  const openModal = (content: IModalContext['modalContent']) => {
    setModal(true);

    if (content) {
      setModalContent(content);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return { modal, modalContent, openModal, closeModal };
};

export default useModal;
