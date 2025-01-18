import styled from "styled-components";

const IntroCard = (props) => {
    return (
        <>
            <Container>
                <Bar>
                    <Photo>
                        <img src="/images/portrait/photo.png" alt="Andreas Photo"/>
                    </Photo>
                </Bar>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    top: 0;
    height: 700px;
    width: 100%;
    display: flex;
    align-items: center;
`;

const Bar = styled.div`
    position: relative;
    background-color: #676767;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
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