import { Link } from "react-router";
import styled from "styled-components";

const HeroWrapper = styled.section`
    padding: 80px 5% 64px;
    background: #fafaf8;
    border-bottom: 1px solid #e8e4df;
    font-family: 'DM Sans', sans-serif;
`;

const Name = styled.h1`
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 500;
    color: #1a1a1a;
    margin: 0 0 8px;
    letter-spacing: -0.02em;
`;

const Title = styled.p`
    font-size: 1rem;
    color: #6b6b6b;
    font-weight: 300;
    margin: 0 0 32px;
    letter-spacing: 0.02em;
`;

const CTARow = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;

const PrimaryBtn = styled(Link)`
    padding: 10px 22px;
    background: #1a1a1a;
    color: #fafaf8;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.15s ease;
    &:hover { background: #333; }
`;

const SecondaryBtn = styled.a`
    padding: 10px 22px;
    background: transparent;
    color: #1a1a1a;
    border: 1px solid #e8e4df;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 400;
    text-decoration: none;
    transition: border-color 0.15s ease;
    &:hover { border-color: #1a1a1a; }
`;

export default function Hero() {
    return (
        <HeroWrapper>
            <Name>Mofolaoluwarera "Fola" Oladipo</Name>
            <Title>CS & AI Graduate · Boston University MS '26</Title>
            <CTARow>
                <PrimaryBtn to="/projects">View Projects</PrimaryBtn>
                <SecondaryBtn href="/resume.pdf" target="_blank">Download Resume</SecondaryBtn>
            </CTARow>
        </HeroWrapper>
    );
}