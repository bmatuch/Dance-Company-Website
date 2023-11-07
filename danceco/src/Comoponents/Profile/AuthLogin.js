import React, { useEffect, useState } from "react";
import { checkUser, loginUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

// in future, we could add an edit profile option to the login
// this will allow the user to add updates to their profile
const AuthLogin = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: ""
  });

  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (checkUser()) {
      navigate("/login/profile");
    }
  }, [navigate]);

  useEffect(() => {
    if (currentUser && add) {
      loginUser(currentUser).then((userLoggedIn) => {
        if (userLoggedIn) {
          alert(
            `${userLoggedIn.get("first_name")}, you successfully logged in!`
          );
          navigate("/login/profile");
        }
        setAdd(false);
      });
    }
  }, [navigate, currentUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setCurrentUser({
      ...currentUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  return (
    <div>
      <AuthForm
        user={currentUser}
        isLogin={true}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
      <p>Don't have an account? <a href="/create">Click here</a> to create one.</p>
    </div>
  );
};

export default AuthLogin;
