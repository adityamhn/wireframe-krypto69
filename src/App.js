import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ExtraCursor from './components/ExtraCursor/ExtraCursor'
import { Users } from './pages/Users/Users';
import Menu from './pages/Menu/Menu';
import PageTransition from './components/PageTransition';

function App() {


  const homeRoutes = [
    { path: '/', element: <Home /> },
    { path: '/menu', element: <Menu /> },
    { path: '/users', element: <Users /> },
    

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
