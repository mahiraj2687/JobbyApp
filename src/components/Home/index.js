import './index.css'
import {Link} from 'react-router-dom'

const Home = () => (
  <div className="home_container">
    <h1 className="welcome_heading">Welcome to Job Portal</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
      alt="home"
      className="home_image"
    />
    <Link to="./jobs">
      <button className="find_jobs" type="button">
        Find Jobs
      </button>
    </Link>
  </div>
)

export default Home
