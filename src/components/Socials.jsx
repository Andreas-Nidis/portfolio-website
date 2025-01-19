import styled from "styled-components";

const Socials = (props) => {
    return (
        <Container>
            <Title>
                <h2>Get In Touch</h2>
            </Title>
            <SocialList>
                <ul>
                    <li><a href="https://www.instagram.com/andreaszelalic/"><img src="/images/socials-icons/instagram.png" />Instagram</a></li>
                    <li ><a href="https://www.linkedin.com/in/andreas-kalketenidis-335253295"><img src="/images/socials-icons/linkedIn.png" />LinkedIn</a></li>
                    <li><a href="https://github.com/Andreas-Nidis"><img src="/images/socials-icons/github.png" />GitHub</a></li>
                </ul>
            </SocialList>
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
        letter-spacing: 6px;
    }

    @media (max-width: 968px) {
        margin-top: 10px;
        padding-top: 20px;
    }
`;

const SocialList = styled.div`
    position: relative;
    width: 100%;

    ul {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;

        a {
            margin: 0.3rem;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 6.5rem;
            color: #212121;

            img {
                width: 2.5rem;
            }
        }

        @media (max-width: 968px) {
            flex-wrap: wrap;
            margin: 10px;/
        }
    }
`;

export default Socials;