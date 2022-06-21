import ImagesList from './components/imagesList/ImagesList';
import Nav from './components/Nav';
import Upload from './components/upload/Upload';
import { Container } from '@mui/material';
import AuthContext from './context/AuthContext';
import Modal from './components/Modal';
import MainNotification from './components/MainNotification';
import Loading from './components/Loading';
import Verification from './components/user/Verification';
import logo from './logo.svg'

function App() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', mt: '3rem' }}>
      <AuthContext>
        <Loading />
        <Modal />
        <Verification />
        <MainNotification />
        <div className='top-bar'>
          <img src={logo} className='logo'></img>
          <div className='top-bar-right'>
            <Upload />
            <Nav/>
          </div>
        </div>        
        
        <ImagesList />
      </AuthContext>
    </Container>
  );
}

export default App;
