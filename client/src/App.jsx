import { Route } from "react-router-dom";
import { Home, Detail, Create } from "./pages";

import {lazy, Suspense} from 'react';
const Landing = lazy(() => import("./pages/Landing.jsx"));

const App = () => {
  return (
    <div>
      <Route exact path="/" render={() => <Suspense fallback={<h1>Loading...</h1>}><Landing /></Suspense>} />
      <Route exact path="/home" render={() => <Home /> }/>
      <Route exact path="/detail/:id" render={() => <Detail />} />
      <Route exact path="/create" render={() => <Create />} />
    </div>
  )
}

export default App;