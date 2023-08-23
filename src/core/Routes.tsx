import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout.js'
import AuthRoutes from './routes/AuthRoutes.js'

import HomeLayout from './layouts/HomeLayout.js'
import HomeRoutes from './routes/HomeRoutes.js'

import Modules from '../modules/Modules.js'

const Routes = createBrowserRouter([
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        ...AuthRoutes
      ]
    },
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        ...HomeRoutes,
        ...Modules
      ]
    }
  ])

export default Routes