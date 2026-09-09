import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { initializeAnalyticsConsent } from './lib/analyticsConsent'

initializeAnalyticsConsent()

// Ensure you have a root element with the ID 'root' in your index.html file
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error("Root element with id 'root' not found.")
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
