import styled from "styled-components";

const Wrapper = styled.main`
    font-family: 'DM Sans', sans-serif;
    color: #1a1a1a;
    max-width: 720px;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e8e4df;
`;

const HobbyItem = styled.div`
  padding: 28px 0;
  border-bottom: 1px solid #e8e4df;
  &:last-child { border-bottom: none; }

  h3 {
    font-size: 0.95rem;
    font-weight: 500;
    color: #1a1a1a;
    margin: 0 0 8px;
  }

  p {
    font-size: 0.85rem;
    color: #3a3a3a;
    line-height: 1.7;
    margin: 0;
  }
`;

export default function Hobbies() {
    return (
        <Wrapper>
            <SectionTitle>Hobbies & Interests</SectionTitle>

            <HobbyItem>
                <h3>Football</h3>
                <p>Passionate about the game on and off the pitch. I play regularly with a group of friends and follow the Premier League closely — which directly inspired my EPL match prediction and FootyLiveliness projects.</p>
            </HobbyItem>

            <HobbyItem>
                <h3>Fitness</h3>
                <p>I train on a push/pull/legs split and am working toward a longer-term calisthenics progression. Staying active keeps me sharp during long stretches of research and coding.</p>
            </HobbyItem>

            <HobbyItem>
                <h3>Gaming</h3>
                <p>I enjoy both competitive and casual gaming as a good past time.</p>
            </HobbyItem>

        </Wrapper>
    );
}