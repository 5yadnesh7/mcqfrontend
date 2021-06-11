import './App.css';
import home from "./Components/home";
import course from "./Components/course";
import topic from "./Components/topic";
import about from "./Components/about";
import mcqpage from "./Components/mcqpage";
import upload from "./Components/upload";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route exact path="/course" component={course} />
        <Route exact path="/topic" component={topic} />
        <Route exact path="/about" component={about} />
        <Route exact path="/mcqpage" component={mcqpage} />
        <Route exact path="/uploadfunctionaccessyadneshkrishnavannamma" component={upload} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
