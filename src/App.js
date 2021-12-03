import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { Login } from './components/Login'

import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
