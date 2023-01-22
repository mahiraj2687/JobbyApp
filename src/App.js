import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Jobs from './components/Jobs'
import Home from './components/Home'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/jobs" component={Jobs} />
  </Switch>
)

export default App
