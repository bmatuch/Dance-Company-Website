import "./App.css";
import Parse from "parse";
import * as Env from "./environments";
import Components from "./Comoponents/Components";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return <Components />;
}

export default App;