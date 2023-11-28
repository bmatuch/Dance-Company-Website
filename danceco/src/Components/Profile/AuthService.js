import Parse from "parse";

export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("first_name", newUser.first_name);
  user.set("last_name", newUser.last_name);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);

  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.email);

  console.log("User: ", user);
  console.log();
  return user
    .logIn(user.email, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};

export async function checkAdmin() {
  const Users = Parse.Object.extend("User");
  const query = new Parse.Query(Users);

  // get the current user 
  const currentUser = Parse.User.current();
  
  // find the current user in Users
  query.equalTo("objectId", currentUser.id);
  const user = await query.first(); 
  

  if(user.get("isAdmin") == true) {
    return true;
  }

  else {
    return false;
  }
  

  
};


