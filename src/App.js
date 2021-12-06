import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Login } from './pages/Login'
import { User } from './pages/User'
import { UserStorageProvider } from './contexts/UserContext'

import './styles/global.scss'

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
        </Routes>
        <Footer />
      </UserStorageProvider>
    </BrowserRouter>
  );
}