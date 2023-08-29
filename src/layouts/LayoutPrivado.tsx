import Container from 'react-bootstrap/Container';
import Header from '../core/pages/home/Header';

const LayoutPrivado = ({ children }: { children: JSX.Element}) => {

    return (
        <div className="App">
            <Header />
            <Container>
                {children}
            </Container>
        </div>
    );
}

export default LayoutPrivado;