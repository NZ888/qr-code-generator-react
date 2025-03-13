import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { BrowserRouter } from "react-router-dom";
import {LinkProvider} from "./components/contexts/LinkContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
          <BrowserRouter>
                  <LinkProvider>
                      <App />
                  </LinkProvider>
          </BrowserRouter>
  </StrictMode>
)
