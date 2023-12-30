import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ArchivePage } from './pages/ArchivePage';
import { LinksPage } from './pages/LinksPage';
import { AboutPage } from './pages/AboutPage';
import { RequestPage } from './pages/RequestPage';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/archive' element={<ArchivePage />} />
        <Route path='/links' element={<LinksPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/request' element={<RequestPage />} />
      </Routes>

      <Footer />
    </div>
  )
}