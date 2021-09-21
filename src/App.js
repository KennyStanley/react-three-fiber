import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"
import CharacterPage from "./pages/Character"
import ConferencePage from "./pages/Conference"
import { Home } from "./pages/Home"
import PlaygroundPage from "./pages/Playground"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/character">
            <CharacterPage />
          </Route>
          <Route path="/playground">
            <PlaygroundPage />
          </Route>
          <Route path="/conference">
            <ConferencePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}