import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Homepage from "./Homepage";
import Authentication from "./authentication/Authentication";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            email: authUser.email,
            username: authUser.displayName,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("User  is not logged in");
      }
    });
  }, []);

  return (
    <>
       <div className="app">
        <>{user ? <Homepage /> : <Authentication />}</>
    </div>
    </>
  );
}

export default App;
