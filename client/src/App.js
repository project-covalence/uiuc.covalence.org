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
import StudentTreeLeaf from './components/StudentTreeLeaf.component'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
      <StudentTreeLeaf />
    </div>
  )
}

export default App
