import React from 'react';
import styled from "styled-components";
import {Container} from "./component/container/container.component";
import useData from "./hooks/useData";
import {UserData} from "./types";
import {LoadingSpin} from "./component/loading-spin/loading-spin.component";
import {Error} from "./component/error/error.component";

function App() {


  const AppContainer = styled.div`
    background: #F2F2F2;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
  `
  const ContainerBox = styled.div`
      width: 50%;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `

  const [ loading, data, error] = useData<UserData>('user.json');
  const renderContent = () => {
      if(loading) {
          return <LoadingSpin />
      } else {
          if (error) {
              return <Error/>
          } else {
              return <Container data={data!}/>
          }
      }
  }

  return (
      <AppContainer>
          <ContainerBox>
              {renderContent()}
          </ContainerBox>
      </AppContainer>
  );
}

export default App;
