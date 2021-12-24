import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Login } from './pages/Login'
import { User } from './pages/User'
import { UserStorageProvider } from './contexts/UserContext'

import './styles/global.scss'
import { Photo } from './components/Photo';
import { UserProfile } from './components/UserProfile';
import { NotFound } from './components/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <UserStorageProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route
            path="conta/*"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>}
          />
          <Route path="foto/:id" element={<Photo />} />
          <Route path="perfil/:user" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </UserStorageProvider>
    </BrowserRouter>
  );
}