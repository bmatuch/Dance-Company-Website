import Parse from "parse";

// READ operation - get all dances
export const getAllDances = () => {
  const Dances = Parse.Object.extend("Dances");
  const query = new Parse.Query(Dances);
  query.include('choreo');
  return query.find().then((results) => {
    return results;
  });
};
