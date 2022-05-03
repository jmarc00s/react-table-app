import Navbar from './components/Navbar';

import routes from './core/config/routes';
import { Outlet, ReactLocation, Router } from 'react-location';

const location = new ReactLocation();

function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Router location={location} routes={routes}>
        <Navbar />
        <div className="container pt-3 mx-auto">
          <Outlet />
        </div>
      </Router>
    </div>
  );
}

export default App;
