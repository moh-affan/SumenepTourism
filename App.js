import React from "react";
import { ThemeProvider } from 'react-native-elements';
import theme from './src/themes';
import AppContainer from './src/Main';

const App = () => {
  return (<ThemeProvider theme={theme}>
    <AppContainer />
  </ThemeProvider>);
};

export default App;
