import { Provider } from 'react-redux';

import store from 'store';
import { ModalContextProvider } from 'context/Modal';

import { RouterProvider } from './routes';

import './styles/index.global.scss';

const ReelBudApp = () => (
  <Provider store={store}>
    <ModalContextProvider>
      <RouterProvider />
    </ModalContextProvider>
  </Provider>
);

export default ReelBudApp;
