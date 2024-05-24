
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBarComponent from './components/Navbar';
import UsersPage from './pages/Users';
import PeliculasPage from './pages/PeliculasPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <BrowserRouter>

      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/peliculas" element={<PeliculasPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>

    </BrowserRouter>
  );
}
