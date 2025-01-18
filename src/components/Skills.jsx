import styled from "styled-components";

const Skills = (props) => {
    return (
        <Container>
            <Title>
                <h2>Skills</h2>
            </Title>
            <SkillList>
                <ul class="skill-list">
                    <li><img src="/images/skill-icons/HTML5.png" alt="HTML5"/>HTML5</li>
                    <li><img src="/images/skill-icons/CSS.png" alt="CSS"/>CSS</li>
                    <li><img src="/images/skill-icons/Javascript.png" alt="Javascript"/>Javascript</li>
                    <li><img src="/images/skill-icons/React.png" alt="React"/>React</li>
                    <li><img src="/images/skill-icons/Redux.png" alt="Redux"/>Redux</li>
                    <li><img src="/images/skill-icons/Git.png" alt="Git"/>Git</li>
                    <li><img src="/images/skill-icons/Python.png" alt="Python3"/>Python 3</li>
                    <li><img src="/images/skill-icons/PostgreSQL.png" alt="PostgreSQL"/>PostgreSQL</li>
                </ul>
            </SkillList>
        </Container>
    )
}


const Container = styled.div`
    position: relative;
`;

const Title = styled.div`
    position: relative;
    padding: 0px 20px;
    display: flex;

    h2 {
        font-family: 'Monoton', serif;
        font-size: 30px;
    }

    @media (max-width: 968px) {
        margin-top: 10px;
        padding-top: 50px;
        justify-content: center;
    }
`;

const SkillList = styled.div`
    position: relative;
    width: 100%;
    height: 100px;

    ul {
        padding: 0;
        display: flex;
        flex-direction: row;

        li {
            margin: 0.3rem;
            padding: 1rem;
            list-style-type: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 6.5rem;
            color: #212121;

            img {
                width: 2.5rem;
            }
        }
    }
`;

export default Skills;