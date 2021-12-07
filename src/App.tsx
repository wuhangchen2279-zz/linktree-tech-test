import React from 'react';
import styled from "styled-components";
import {Container} from "./component/container/container.component";

function App() {


  const AppContainer = styled.div`
    background: #F2F2F2;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
  `

  return (
      <AppContainer>
        <Container/>
      </AppContainer>
  );
}

export default App;
