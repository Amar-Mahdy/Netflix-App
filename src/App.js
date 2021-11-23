import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch,useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";
import { MovieProvider} from "./components/api_connection/movieContext";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unSubscribe;
  }, [dispatch]);
  return (
    <div className="App">
     <MovieProvider>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        )}
      </Router>
      </MovieProvider>
    </div>
  );
}

export default App;
