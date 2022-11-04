import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from 'store';
import { ModalContextProvider } from 'context/Modal';

import { RouterProvider } from './routes';

import './styles/index.global.scss';

const ReelBudApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ModalContextProvider>
        <RouterProvider />
      </ModalContextProvider>
    </BrowserRouter>
  </Provider>
);

export default ReelBudApp;
