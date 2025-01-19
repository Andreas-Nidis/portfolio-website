import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ProjectSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        // autoplay: true,
    }

    return (
        <Container>
            <Title>
                <h2>Projects</h2>
            </Title>
            <Carousel {...settings}>
                <Wrap>
                    <a href="https://disneyplus-clone-portfolio.netlify.app">
                        <img src="/images/project-thumbnails/disneyplus-clone-thumbnail.png" alt="DisneyPlus Clone" />
                    </a>
                    <div>
                        <h3>Disney+ Clone</h3>
                        <p>Test text</p>
                    </div>
                </Wrap>
                <Wrap>
                    <a href="https://woodit.netlify.app">
                        <img src="/images/project-thumbnails/woodit-thumbnail.png" alt="Wood Carving Website" />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="" alt="Phaser Game (in development)" />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="" alt="Icy Road Warning Website (tba)" />
                    </a>
                </Wrap>
            </Carousel>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    position: relative;
    padding: 0px 30px;
    display: flex;
    justify-content: center;

    h2 {
        font-family: 'Monoton', serif;
        font-size: 30px;
    }
`;

const Carousel = styled(Slider)`
    width: 70%;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 2;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul.slick-dots {
        bottom: -10px;
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(53, 53, 53);
        }
    }

    li.slick-active button:before {
        color: #ffffff;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }
`;

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    padding: 5px;

    a {
        border-radius: 8px;
        box-shadow: rgb(0 0 0 / 39%) 0px 26px 30px -10px, 
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            transition: transform 0.3s ease-in-out;
        }

        &:hover {

            img {
                transform: scale(1.05);
                transition: transform 0.3s ease-in-out;
            }
        }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        h3 {
            /* font-size: 100px; */
            margin: 0px;
        }
        p {
            margin: 0px;
        }
    }
`;

export default ProjectSlider;