import Logo from '../logo.svg';

const ReactLogo = () => {
    return (
        <img src={Logo}
            alt="Logo"
            style={{ position: 'fixed', bottom: '20px', right: '20px', width: '130px' }}
        />
    );
}

export default ReactLogo;