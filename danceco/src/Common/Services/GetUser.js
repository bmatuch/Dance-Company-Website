import Parse from "parse";

// READ Operation: 
export const GetUser = (userId) => {
  const Users = Parse.Object.extend("User");
  const query = new Parse.Query(Users);
  query.equalTo("objectId", userId);
  
  return query.find().then((results) => {
    return results;
  });
};