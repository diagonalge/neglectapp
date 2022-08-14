import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/Page404';
import Home from './pages/Home';
import ForgetPassword from './components/authentication/login/forgetPassword';
import ResetPassword from './components/authentication/login/Resetpassword';
import GuardianActivation from './components/authentication/register/GuardianActivation';
import DoctorActivation from './components/authentication/register/DoctorActivation';
import Testcloud from './pages/Testcloud';
import NavTest from './pages/NavTest';

import Testapi from './pages/Testapi';
import Rehabilitator from './Doctordashboard/pages/Rehabilitator';
// ----------------------------------------------------------------------

export default function Router() {
  

  

  return useRoutes([

    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [

        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        {path: 'home', element: <Home />},
        {path: 'forgetpassword', element: <ForgetPassword />}, 
        {path:'user/reset/:id',element:< ResetPassword  />},  
        {path:'guardian/activate/:activation_token',element:< GuardianActivation  />},  
        {path:'doctor/activate/:activation_token',element:< DoctorActivation  />},
        {path:'testnav',element:<NavTest />},
        { path: '404', element: <NotFound /> }
        ,{path:'testapi',element:<Testapi />},
        {path:'testcloud',element:<Testcloud />},
        {path: 'rehabilitator', element: <Rehabilitator /> },
        { path: '/', element: <Navigate to="/home" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
