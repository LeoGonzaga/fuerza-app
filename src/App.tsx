import React from 'react';
import Notification from './components/Notification';
import Routes from './routes';
import { GlobalStyles } from './themes/global.theme';

function App() {
  return (
    <>
      <Notification />
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
