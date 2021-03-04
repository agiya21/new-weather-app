import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Window from "./components/contents/Window"
import Home from "./components/contents/Home"


function App() {
  return (
    <div>
      <Header />
      <Router basename={window.location.pathname || ''}>
        <SearchBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Window/:name" component={Window}></Route>
      </Router>
    </div>

  )
}

export default App
