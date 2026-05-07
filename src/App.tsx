import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/mains/Home';
import Education from './components/mains/Education';
import Experience from './components/mains/Experience';
import Projects from './components/mains/Projects';
import Research from './components/mains/Research';
import Skills from './components/mains/Skills';
import Hobbies from './components/mains/Hobbies';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Playfair+Display:wght@500&display=swap');
    *, *::before, *::after { box-sizing: border-box; }
    body {
        margin: 0;
        background: #f0ede8;
        font-family: 'DM Sans', sans-serif;
    }
`;

const PageWrapper = styled.div`
    width: 82vw;
    background: #fafaf8;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) { width: 100vw; }
`;

const Main = styled.main`
    flex: 1;
    padding: 40px 5%;
`;

function Root() {
    return (
        <PageWrapper>
            <Nav />
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                </Routes>
            </Main>
            <Footer />
        </PageWrapper>
    );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}