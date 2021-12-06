import React from 'react';
import './App.css';
import {DefaultTheme, ThemeProvider} from "styled-components";
import {Link} from "./component/link/link.component";
import {LinkType} from "./component/link/link.types";

function App() {
  const theme : DefaultTheme = {
      link: {
          primary: {
              color: 'red',
              textAlign: 'center',
              backgroundColor: 'grey',
          },
          secondary: {
              color: 'black',
              textAlign: 'left',
              backgroundColor: 'green',
          }
      }
  }
  return (
      <ThemeProvider theme={theme}>
          <header className="App-header">
            <Link linkType={LinkType.PRIMARY} label="test" />
          </header>
      </ThemeProvider>
  );
}

export default App;
