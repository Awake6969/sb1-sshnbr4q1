import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Hide loader after the app is mounted
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
      loader.classList.add('hidden');
      // Remove loader from DOM after transition
      setTimeout(() => loader.remove(), 300);
    }
  }, 1000); // Show loader for at least 1 second
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);