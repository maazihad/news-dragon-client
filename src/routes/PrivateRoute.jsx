import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/SharedCompo/Spinner/Spinner';
import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!user) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Looooooooooooooooooooing first.',
    });
    // return <Navigate to='/login' state={location.pathname}></Navigate>; // এভাবেও লেখা যাবে
    return (
      <Navigate to='/login' state={{ from: location.pathname }}></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
