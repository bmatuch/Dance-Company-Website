import Parse from "parse";

// READ Operation: 
export const GetUser = (profileId) => {
  const Profile = Parse.Object.extend("User");
  const query = new Parse.Query(Profile);
  query.equalTo("objectId", profileId);
    
  return query.find().then((results) => {
    console.log(results);
    return results;
  });
};