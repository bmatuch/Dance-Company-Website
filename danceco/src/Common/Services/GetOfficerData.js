import Parse from "parse";

// READ operation - get officer by role
export const getAllOfficers = () => {
  const OfficerData = Parse.Object.extend("OfficerData");
  const query = new Parse.Query(OfficerData);
  return query.find().then((results) => {
    // return Lesson object with objectId: role
    return results;
  });
};
