import * as React from 'react';

import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';

import '@fontsource/kanit/300.css';
import '@fontsource/kanit/400.css';
import '@fontsource/kanit/700.css';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './assets/styles.css';
import { Index } from './components/Index';
import { theme } from './config/theme';
import { Root } from './root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeScript />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
