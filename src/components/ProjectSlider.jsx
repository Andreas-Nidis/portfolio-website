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
        autoplay: true,
    }

    return (
        <Container>
            <Title>
                <h2>Projects</h2>
            </Title>
            <Carousel {...settings}>
                <Wrap>
                    <a href="https://pern-store-project.onrender.com">
                        <img src="/images/project-thumbnails/pinventory-thumbnail.png" alt="Pinventory" />
                    </a>
                    <div>
                        <h3>Pinventory</h3>
                        <p>Pinventory is a PERN web application built and designed to enable users to keep track of what items they own in their house, garage, warehouse, wherever! <br/><br/> This project highlights my ability to create a full-stack application by handling the creation of both the API and client-facing, interactive part of a project using React <br/><br/> Note that this project uses the free services of <a>render.com</a>, so loading the website might take a while at first.</p>
                    </div>
                </Wrap>
                <Wrap>
                    <a href="https://disneyplus-clone-portfolio.netlify.app">
                        <img src="/images/project-thumbnails/disneyplus-clone-thumbnail.png" alt="DisneyPlus Clone" />
                    </a>
                    <div>
                        <h3>Disney+ Clone</h3>
                        <p>Disney+ Clone is a fully-responsive website inspired by Disney+. Built using HTML, CSS, JavaScript, React, Redux, and integrated with a movie database API (Firebase), this project allows users to browse and view detailed information about movies and TV shows. <br/><br/> It demonstrates my skills in creating user-friendly interfaces and utilise APIs, while focusing on clean design and smooth functionality.</p>
                    </div>
                </Wrap>
                <Wrap>
                    <a href="https://woodit.netlify.app">
                        <img src="/images/project-thumbnails/woodit-thumbnail.png" alt="Wood Carving Website" />
                    </a>
                    <div>
                        <h3>WoodIt</h3>
                        <p>WoodIt is a single-page web application built with React, designed to showcase wood carving work and allow users to make custom requests. While the website currently features placeholder images and descriptions, it serves as a conceptual platform for sharing my future wood carving creations and receiving commissions. <br/><br/> This project highlights my ability to create dynamic, interactive web applications with React independently for specific purposes.</p>
                    </div>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/project-thumbnails/brick-breaker-thumbnail.png" alt="Phaser Game (in development)" />
                    </a>
                    <div>
                        <h3>Classic Brick Breaker</h3>
                        <p>Currently in development using Phaser.js!</p>
                    </div>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/project-thumbnails/icey-roads-thumbnail.png" alt="Icy Road Warning Website (tba)" />
                    </a>
                    <div>
                        <h3>Icey Roads</h3>
                        <p>Icey Roads will use a combination of varaibles, such as precipitation, humidity, temperature, weather alerts, etc., to determine how icey the roads are in a user's area, and whether they are fit to drive on. <br/><br/> To be announced!</p>
                    </div>
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
    position: relative;

    ul.slick-dots {
        bottom: 0px;
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

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 0;
            transition: opacity 0.2s ease 0s;
        }
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev, .slick-next {
        display: hidden;
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
            rgb(0 0 0 / 33%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 20px;
        

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
        text-align: center;
        margin-top: 20px;

        h3 {
            font-size: 22px;
        }
        p {
            margin: 50px;
            margin-top: 10px;
        }
    }
`;

export default ProjectSlider;
