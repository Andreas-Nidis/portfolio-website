import styled from "styled-components";

const AboutMe = (props) => {
    return (
        <Container>
            <Title>
                <h2>About Me</h2>
            </Title>
            <Description>
                <p>Hi, I'm Andreas Kalketenidis — a budding web developer with a passion for solving twice as many bugs as I create!</p>
                <p>I hold a bachelor's degree in Philosophy, which has given me a strong foundation in critical thinking and problem-solving. This academic background has shaped the way I approach web development by discipling me in the way of crafting logical, concise, and creative answers in response to complex concepts.</p>
                <p>Currently, I'm well-versed in <b>HTML5</b>, <b>CSS</b>, <b>Javascript</b>, <b>React</b>, and <b>Python 3</b>, while expanding my skillsets by diving deeper into <b>PostgreSQL</b>, <b>Node.js</b> and <b>Phaser</b>. I enjoy building the front end, client-side of applications, and am currently learning how to tackle server-side, back-end tasks. <br/><br/> Whether it's crafting sleek, fun, and responsive interfaces or developing efficient systems behind the scenes, I am determined to bring ideas to life with clean, functional code!</p>
                <p>Having grown up in dynamic, multicultural environments like New York City and Athens, Greece, I've formed a strong ability to connect with people from all over the world and bring diverse perspectives into my work. I thrive in collaborative settings, valuing clear communication and teamwork, while also being highly self-motivated and effective when working independently.</p>
                <p>My ultimate goal is to nurture and push myself as a person and programmer in order to be able to create meaningful tools, platforms, and experiences that make people's lives easier and more enjoyable. Whether it's working on full-stack projects or diving into tools I haven't touched upon yet, I'm excited to continue learning, growing, and developing!</p>
                <p>Let's build something great together!</p>
            </Description>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
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

    @media (max-width: 968px) {
        margin-top: 100px;
        padding-top: 50px;
    }
`;

const Description = styled.div`
    position: relative;
    padding: 0px 20px;

    p {
        font-size: 20px;
        text-align: center;
    }
`;

export default AboutMe;