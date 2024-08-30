
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import HomePage from './pages/HomePAge/HomePage';


const routes = (
  <Router>
  <Routes>
    <Route path="/" exact element={<HomePage />} />
    <Route path="/dashboard" exact element={<Home />} />
    <Route path="/login" exact element={<Login />} />
    <Route path="/signUp" exact element={<SignUp />} />
  </Routes>
  </Router>
)
 const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}


export default App
