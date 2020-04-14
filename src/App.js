import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

import Navbar from './components/Navbar.component'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
    </div>
  )
}

export default App
