import Parse from "parse";

// READ operation - get all dances
export const getAllDances = () => {
  const Dances = Parse.Object.extend("Dances");
  const query = new Parse.Query(Dances);
  return query.find().then((results) => {
    return results;
  });
};
