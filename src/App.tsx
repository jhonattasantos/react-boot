import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Outlet />
        </>
    );
}

export default App;