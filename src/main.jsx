import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ThemeComponent from './components/theme/ThemeComponent'
import Card from './components/Card'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeComponent/> 
   <Card />
  </React.StrictMode>,
)
