
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUser';
import Container from 'react-bootstrap/Container'
import { ToastContainer, toast } from 'react-toastify';


function App() {

  return (
    <>
      <div className='app-container'>
        <Header></Header>
        <Container>

          <TableUsers />
        </Container>

      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
