import { createBrowserRouter } from 'react-router-dom'
import SapsRoutes  from './modules/saps/routes.tsx'
// import { outroModulo } from 'path/outromodulo'
import App from './App.tsx'

const Routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        ...SapsRoutes,
        // ...outroModulo
      ]
    }
  ])

export default Routes