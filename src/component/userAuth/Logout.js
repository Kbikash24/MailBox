import { Button } from "react-bootstrap";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(logout());
    history.replace("/auth");
  };
  return (
    <Button
      onClick={logoutHandler}
      variant="warning"
      className="border-0 bg-gradient rounded-1 m-5"
    >
      Logout
    
    </Button>
  );
};

export default Logout;
