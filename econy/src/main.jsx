import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Mercado from './pages/Mercado.jsx'
import Empresas from './pages/Empresas.jsx' 
import Contratos from './pages/Contratos.jsx'
import Certificacao from './pages/Certificacao.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import GerenciarContrato from './pages/GerenciarContrato.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Dashboard/>},
      {path:'/Mercado', element: <Mercado/>},
      {path:'/Empresas', element: <Empresas/>},
      {path:'/Contratos', element: <Contratos/>},
      {path:'/Contratos/:contrato', element: <GerenciarContrato/>},
      {path:'Certificacao', element: <Certificacao/>}
    ]
  },
  { path: '*', element: <PageNotFound /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
