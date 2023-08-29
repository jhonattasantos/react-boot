import Container from 'react-bootstrap/Container';
import Header from '../pages/private/Header';

const PrivateLayout = ({ children }: { children: JSX.Element}) => {

    return (
        <div className="App">
            <Header />
            <Container>
                {children}
            </Container>
        </div>
    );
}

export default PrivateLayout;