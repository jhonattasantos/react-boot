import { createBrowserRouter } from 'react-router-dom'
import AuthRoutes from '../modules/auth/routes'
import SapsRoutes  from '../modules/saps/routes'
import NoAuthLayout from '../components/layouts/NoAuthApp.tsx'
import AuthApp from '../components/layouts/AuthApp.tsx'

const Routes = createBrowserRouter([
    {
      path: '/',
      element: <AuthApp />,
      children: [
        ...SapsRoutes
      ]
    },
    {
      path: '/auth',
      element: <NoAuthLayout />,
      children: [
        ...AuthRoutes
      ]
    }
  ])

export default Routes