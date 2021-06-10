import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ExtraCursor from './components/ExtraCursor/ExtraCursor'
import { Users } from './pages/Users/Users';

function App() {


  const homeRoutes = [
    { path: '/', element: <Home /> },
    { path: '/users', element: <Users /> },
    

  ]

  const homeRouting = useRoutes(homeRoutes);


  return (
    <>
    <ExtraCursor />
      {homeRouting}
    </>
  );
}

export default App;
