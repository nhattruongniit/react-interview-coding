import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

// styes
import './styles/tabs.css';
import './styles/traffic-light.css';
import './styles/job-board.css';
import './styles/accordion.css';
import './styles/question-board.css';
import './styles/color-box.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
