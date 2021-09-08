import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"
import BoxesPage from "./pages/Boxes"
import CharacterPage from "./pages/Character"
import { Home } from "./pages/Home"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/boxes">
            <BoxesPage />
          </Route>
          <Route path="/character">
            <CharacterPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}