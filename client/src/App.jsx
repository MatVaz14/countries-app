import { Route } from "react-router-dom";
import { Landing, Home, Detail, Create } from "./pages";

const App = () => {
  return (
    <>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/home" render={() => <Home /> }/>
      <Route exact path="/detail/:id" render={() => <Detail />} />
      <Route exact path="/create" render={() => <Create />} />
    </>
  )
}

export default App;