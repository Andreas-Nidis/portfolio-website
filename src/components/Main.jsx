import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import IntroCard from './IntroCard';
import styled from 'styled-components';
import AboutMe from './AboutMe';

function Main() {

  return (
    <Container>
        <IntroCard />
        <AboutMe />
    </Container>
  )
}

const Container = styled.div`
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    top: 0;
`;

export default Main;


 {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}