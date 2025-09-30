import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { AuthProvider } from './components/AuthProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeContextProvider>
  </StrictMode>
);
