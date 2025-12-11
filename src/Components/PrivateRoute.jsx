import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

function PrivateRoute({ children }) {
  const { isLoggedIn } = useContext(AppContext);

  return isLoggedIn ? children : <Navigate to="/homepage" replace />;
}

export default PrivateRoute;
