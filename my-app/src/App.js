import './App.css';
import styled from 'styled-components';
import Month from './components/Month'


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <Wrapper>
      <Title>interview-calendar</Title>
      <Month />
    </Wrapper>
  );
}

export default App;
