import Parse from "parse";

// READ operation - get all users that are not admin
export const getAllUsers = () => {
  const Users = Parse.Object.extend("User");
  const query = new Parse.Query(Users);
  query.include('profile');
  query.equalTo("isAdmin", false);
  
  return query.find().then((results) => {
    console.log(results);
    return results;
  });
};
