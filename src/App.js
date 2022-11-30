import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from './Contexts/user';
import BuscarCep from './pages/BuscarCep';
import FusoHorario from './pages/FusoHorario';
import Previsao from './pages/Previsao';



function App() {
  return (
    <UserProvider>
      <Router>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<BuscarCep />} />
          <Route path="/FusoHorario" element={<FusoHorario />} />
          <Route path="/Previsao" element={<Previsao />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
