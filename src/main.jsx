import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import RecipeProvider from './Contexts/RecipeContext.jsx' // ✅ use correct provider name

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RecipeProvider> {/* ✅ correct usage of Provider */}
      <App />
      <ToastContainer />
    </RecipeProvider>
  </BrowserRouter>
)
