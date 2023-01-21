import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import EmployementType from '../EmployementType'
import ProfileCard from '../ProfileCard'
import SalaryRange from '../SalaryRange'

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

class Jobs extends Component {
  componentDidMount = () => {
    const result = this.gettingJobsList()
    console.log(result)
  }

  gettingJobsList = async () => {
    const token = Cookies.get('jwt_token')
    console.log(token)
    const url = 'https://apis.ccbp.in/jobs'
    const options = {
      method: 'GET',
      Headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    return data
  }

  navBarContainer = () => (
    <div className="nav_bar_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="logo"
        className="logo"
      />
      <div className="home_jobs">
        <p className="home">Home</p>
        <p className="jobs">Jobs</p>
      </div>
      <div className="button_container">
        <button className="logout_button" type="button">
          Logout
        </button>
      </div>
    </div>
  )

  profileCardContainer = () => (
    <div className="profile_card_container">
      <ProfileCard />
    </div>
  )

  gettingEmployementTypes = () => (
    <div className="types_container">
      <h1 className="salary_heading">Employement Types</h1>
      <ul className="employement_details_container">
        {employmentTypesList.map(each => (
          <EmployementType employementDetails={each} key={each.label} />
        ))}
      </ul>
    </div>
  )

  gettingSalaryRanges = () => (
    <div className="salary_container">
      <h1 className="salary_heading">Salary Ranges</h1>
      <ul className="salary_ranges_container">
        {salaryRangesList.map(each => (
          <SalaryRange salaryDetails={each} key={each.salaryRangeId} />
        ))}
      </ul>
    </div>
  )

  renderResult = () => <ul className="result_of_job_container">{}</ul>

  render() {
    return (
      <div className="jobs_container">
        {this.navBarContainer()}
        <div className="main_container">
          {this.profileCardContainer()}
          {this.gettingEmployementTypes()}
          {this.gettingSalaryRanges()}
        </div>
        {this.renderResult()}
      </div>
    )
  }
}

export default Jobs
