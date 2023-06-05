import './App.css';
import styled from 'styled-components';
import Week from '../Week/Week';


const Title = styled.h1`
  font-size: 1em;
  text-align: start;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;

function App() {
  return (
    <Wrapper>
      <Title>Interview Calendar</Title>
      <Week />
    </Wrapper>
  );
}

export default App;
