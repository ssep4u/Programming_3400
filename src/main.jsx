import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './reset.css'
import TodoListApp from './TodoListApp.jsx'
import HomeApp from './HomeApp.jsx'
import RouterApp from './RouterApp.jsx'
import Date from './Date.jsx'
import DateComponent from './Date.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
    <HomeApp />
    <DateComponent />
  </StrictMode>
);