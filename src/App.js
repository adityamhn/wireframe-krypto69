import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {  useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ExtraCursor from './components/ExtraCursor/ExtraCursor'
import Users from './pages/Users/Users';
import Menu from './pages/Menu/Menu';
import Posts from './pages/Posts/Posts';
import PageTransition from './components/PageTransition';
import SpecPost from './pages/Posts/SpecPost';
import Stocks from './pages/Stocks/Stocks';
import StockReport from './pages/Stocks/StockReport';
import Institutions from './pages/Institutions/Institutions';
import InstitutionDetails from './pages/Institutions/InstitutionDetails';
import UserDetails from './pages/Users/UserDetails';
import { motion } from "framer-motion"

function App() {


  const homeRoutes = [
    { path: '/', element: <Home /> },
    { path: '/menu', element: <Menu /> },
    { path: '/users', element: <Users /> },
    { path: '/posts', element: <Posts /> },
    { path: '/companies', element: <Stocks /> },
    { path: '/govt-institutions', element: <Institutions /> },
    { path: '/posts/:postid', element: <SpecPost /> },
    { path: '/users/:userid', element: <UserDetails /> },
    { path: '/companies/:stockid', element: <StockReport /> },
    { path: '/govt-institutions/:instid', element: <InstitutionDetails /> },


  ]

  const homeRouting = useRoutes(homeRoutes);


  return (
    <>
      <ExtraCursor />
      <PageTransition />
  
      {homeRouting}

    </>
  );
}

export default App;
