import './App.css';
import styled from 'styled-components';
import Week from '../Week/Week';
import Header from '../Header/Header';


const Wrapper = styled.section`
  padding: 2em;
  background:  rgb(227 231 239);
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Week />
    </Wrapper>
  );
}

export default App;
