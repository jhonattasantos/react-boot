import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from '../common/Header';
// import Sidebar from '../common/Sidebar';

const AuthApp: React.FC = () => {
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

export default AuthApp;