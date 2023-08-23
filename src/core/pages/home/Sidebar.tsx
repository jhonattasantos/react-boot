import React from 'react';
import { Col,Nav } from 'react-bootstrap';

const Sidebar: React.FC = () => {
    return (
        <Col sm={3} md={2} className='sidebar'>
            <Nav className='flex-column'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/mcs'>MCS</Nav.Link>
                <Nav.Link href='/saps'>SAPS</Nav.Link>
            </Nav>
        </Col>
    );
}

export default Sidebar;