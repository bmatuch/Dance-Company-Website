import Parse from "parse";

// READ operation - get all of the officers 
export const getAllOfficers = () => {
  const OfficerData = Parse.Object.extend("OfficerData");
  const query = new Parse.Query(OfficerData);
  query.include('danceId');
  
  return query.find().then((results) => {
    return results;
  });
};
