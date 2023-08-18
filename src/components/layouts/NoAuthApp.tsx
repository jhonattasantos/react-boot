import React from 'react';
import { Outlet } from 'react-router-dom';

const NoAuthLayout: React.FC = () => {
    return (
        <>
            <Outlet />
        </>
    );
}

export default NoAuthLayout;