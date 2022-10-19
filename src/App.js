import styled from 'styled-components';
import Game from './components/game';

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
`
function App() {
  return (
    <AppContainer>
      <Game />
    </AppContainer>
  );
}

export default App;
