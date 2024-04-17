import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn, children}) => {
    const navigate = useNavigate();
  if(isLoggedIn){
    return children;
  }
  else {
    navigate("/login")
  }
}

export default PrivateRoute