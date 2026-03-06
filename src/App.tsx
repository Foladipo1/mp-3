import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/mains/Home'
import Education from './components/mains/Education'
import Experience from './components/mains/Experience'
import Projects from './components/mains/Projects'
import Research from './components/mains/Research'
import Skills from './components/mains/Skills'
import Hobbies from './components/mains/Hobbies'
import styled,{createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
    body {
        background-color: #e8e8e0;
        font-family: 'Roboto', sans-serif;
    }
    h1, h2, h3 {
        font-family: 'Open Sans', sans-serif;
    }
    
`

const PageWrapper = styled.div`
    width: 80vw;
    background-color: #f5f5f0;
    margin: 0 auto;
`

const NavMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media (max-width: 749px) {
        flex-direction: column;
    }
`

function Root(){
    return (
        <>
            <PageWrapper>
            <Header/>
            <NavMain>
            <Nav/>
                <Routes>
                    <Route
                        path="/"
                        element={<Home/>}
                    />
                    <Route
                        path={'/index.html'}
                        element={<Home/>}
                    />

                    <Route
                        path={'/education.html'}
                        element={<Education/>}
                    />

                    <Route
                        path={'/experience.html'}
                        element={<Experience/>}
                    />
                    <Route
                        path={'/projects.html'}
                        element={<Projects/>}
                    />
                    <Route
                        path={'/skills.html'}
                        element={<Skills/>}
                    />

                    <Route
                        path={'/hobbies.html'}
                        element={<Hobbies/>}
                    />

                    <Route
                        path={'/research.html'}
                        element={<Research/>}
                    />
                </Routes>

            </NavMain>
            <Footer/>
            </PageWrapper>
        </>
    )
}

const router = createBrowserRouter(
    [{path:"*",Component:Root}]
)


export default function  App() {


return(
    <>

        <GlobalStyle/>
        <RouterProvider router={router}></RouterProvider>
    </>
)
}


