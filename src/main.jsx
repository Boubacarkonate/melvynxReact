import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FetchAPI_withError from './components/FetchAPI_withError'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FetchAPI_withError /> 
  </React.StrictMode>,
)
