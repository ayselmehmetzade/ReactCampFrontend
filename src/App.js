import logo from "./logo.svg";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import { Container } from "semantic-ui-react";
import Navi from "./layouts/Navi";

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className="main">
        <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
