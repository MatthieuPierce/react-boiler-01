import React from 'react';
import { ThemeProvider } from 'styled-components';
import {plainTheme} from './styles/plainTheme';

export const App = () => {

const hallo = `truly an untyped phrase let us see in this modern age`;

return (
  <ThemeProvider theme={plainTheme}>
    <h2>{hallo}</h2>
  </ThemeProvider>
)
}