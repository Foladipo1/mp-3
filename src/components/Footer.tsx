import styled from "styled-components";

const FooterStyled = styled.footer`
    background: #fafaf8;
    border-top: 1px solid #e8e4df;
    padding: 24px 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.8rem;
    color: #6b6b6b;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 8px;
        text-align: center;
    }
`;

const Links = styled.div`
  display: flex;
  gap: 16px;

  a {
    color: #6b6b6b;
    text-decoration: none;
    &:hover { color: #1a1a1a; }
  }
`;

export default function Footer() {
    return (
        <FooterStyled>
            <span>© {new Date().getFullYear()} Fola Oladipo</span>
            <Links>
                <a href="https://github.com/foladipo" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/fola-oladipo" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="mailto:foladipo@bu.edu">Email</a>
            </Links>
        </FooterStyled>
    );
}