import styled, { keyframes } from "styled-components";

const IntroCard = (props) => {
    return (
        <>
            <Container>
                <Title>
                    <h1>Welcome!</h1>
                </Title>
                <Bar>
                    <Photo>
                        <img src="/images/portrait/photo.png" alt="Andreas Photo"/>
                    </Photo>
                </Bar>
            </Container>
        </>
    )
}

const letterSpacingAnimation = keyframes`
  0%, 100% {
    letter-spacing: 3px;
  }
  50% {
    letter-spacing: 8px;
  }
`;

const Container = styled.div`
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    top: 0;
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;


    @media (max-width: 968px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    margin: 100px;
    
    h1 {
        text-shadow: 3px 3px 1px #9d9d9d;
        color: #474747;
        font-family: 'Bungee Inline', cursive;
        font-size: 5em;
        animation: ${letterSpacingAnimation} 2s infinite ease-in-out;
    }

    @media (max-width: 968px) {
        flex-direction: column;
        margin: 50px;
    }
`;

const Bar = styled.div`
    position: relative;
    background-color: #474747;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px #ffcd05, 0 0 20px #ffcd05, 0 0 30px #ff0505;
`;

const Photo = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    background-color: #fef3c6;
    border-radius: 50%;
    border: 2px dotted #676767;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 39%) 0px 16px 10px -10px;

    img {
        height: auto;
        width: 100%;
    }
`;

export default IntroCard;