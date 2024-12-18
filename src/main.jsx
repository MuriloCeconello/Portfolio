import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'
import Footer from '../src/components/Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main />
    <Footer />
  </StrictMode>,
)