import { Provider } from 'react-redux';

import store from 'store';

import { RouterProvider } from './routes';

import './styles/index.global.scss';

const ReelbudApp = () => (
  <Provider store={store}>
    <RouterProvider />
  </Provider>
);

export default ReelbudApp;
