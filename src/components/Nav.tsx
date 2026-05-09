import { Link, useLocation } from "react-router";
import styled from "styled-components";
import { useState } from "react";

const NavWrapper = styled.nav`
    position: sticky;
    top: 0;
    z-index: 100;
    background: #fafaf8;
    border-bottom: 1px solid #e8e4df;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    font-family: 'DM Sans', sans-serif;
`;

const NavLinks = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 2px;
    @media (max-width: 768px) { display: none; }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
    color: ${({ $active }) => ($active ? "#1a1a1a" : "#6b6b6b")};
    font-size: 0.82rem;
    font-weight: ${({ $active }) => ($active ? "500" : "400")};
    text-decoration: none;
    padding: 6px 12px;
    border-radius: 6px;
    background: ${({ $active }) => ($active ? "#f0eee9" : "transparent")};
    transition: color 0.15s ease, background 0.15s ease;
    &:hover { color: #1a1a1a; background: #f0eee9; }
`;

const HamburgerButton = styled.button<{ $open: boolean }>`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    right: 5%;
    @media (max-width: 768px) { display: flex; }

    span {
        display: block;
        width: 22px;
        height: 1.5px;
        background: #1a1a1a;
        transition: all 0.25s ease;
        transform-origin: center;
    }
    ${({ $open }) => $open && `
        span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        span:nth-child(2) { opacity: 0; }
        span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
    `}
`;

const MobileMenu = styled.div<{ $open: boolean }>`
    display: none;
    @media (max-width: 768px) {
        display: ${({ $open }) => ($open ? "flex" : "none")};
        position: absolute;
        top: 56px;
        left: 0;
        right: 0;
        background: #fafaf8;
        border-bottom: 1px solid #e8e4df;
        flex-direction: column;
        padding: 12px 5% 20px;
        gap: 2px;
    }
`;

const MobileLink = styled(Link)<{ $active: boolean }>`
    color: ${({ $active }) => ($active ? "#1a1a1a" : "#6b6b6b")};
    font-size: 0.9rem;
    font-weight: ${({ $active }) => ($active ? "500" : "400")};
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 6px;
    background: ${({ $active }) => ($active ? "#f0eee9" : "transparent")};
    &:hover { color: #1a1a1a; background: #f0eee9; }
`;

const links = [
    { to: "/", label: "Home" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/research", label: "Research" },
    { to: "/education", label: "Education" },
    { to: "/experience", label: "Experience" },
];

export default function Nav() {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    return (
        <>
            <NavWrapper>
                <NavLinks>
                    {links.map(({ to, label }) => (
                        <NavLink key={to} to={to} $active={location.pathname === to}>
                            {label}
                        </NavLink>
                    ))}
                </NavLinks>
                <HamburgerButton $open={open} onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    <span /><span /><span />
                </HamburgerButton>
            </NavWrapper>
            <MobileMenu $open={open}>
                {links.map(({ to, label }) => (
                    <MobileLink key={to} to={to} $active={location.pathname === to} onClick={() => setOpen(false)}>
                        {label}
                    </MobileLink>
                ))}
            </MobileMenu>
        </>
    );
}