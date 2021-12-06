import React from 'react';
import styled, {DefaultTheme, ThemeProvider} from "styled-components";
import {Container} from "./component/container/container.component";

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
  const AppContainer = styled.div`
    background: #F2F2F2;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
  `

  return (
      <ThemeProvider theme={theme}>
          <AppContainer>
            <Container />
          </AppContainer>
      </ThemeProvider>
  );
}

export default App;
