import styled from 'styled-components';
import PlayingField from './components/PlayingField';

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
`


function App() {
  return (
    <AppContainer>
      <PlayingField />
    </AppContainer>
  );
}

export default App;
