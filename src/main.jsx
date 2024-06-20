import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import { AppProvider } from './components/News/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Auth0Provider
      domain="dev-gmtsv6zatge5naz4.us.auth0.com"
      clientId="MWMovyJU10JyfsX3okQY9MgDUDBBdh1X"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    > 
    <AppProvider>
       <App />
       </AppProvider>
    </Auth0Provider>
)
