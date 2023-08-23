import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from '../pages/home/Header';
// import Sidebar from './pages/Sidebar'

const HomeLayout: React.FC = () => {
    return (
        <>
            <Header />
            {/* <Sidebar /> */}
            <Container>
                <Outlet />
            </Container>
        </>
    );
}

export default HomeLayout;