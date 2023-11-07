import React, { useEffect, useState } from "react";
import { checkUser, createUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
// in the future, we could make register be more like making an application to dance co
// we could add in an audition page that the user is directed to after making an account
// on this page, the user could schedule an audition with the club
const AuthReg = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  });

  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("first_name")}, you successfully registered!`
          );
          navigate("/"); // this will go to our app in future
        }
        setAdd(false);
      });
    }
  }, [navigate, newUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
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
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthReg;
