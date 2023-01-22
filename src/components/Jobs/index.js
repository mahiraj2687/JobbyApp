import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import EmployementType from '../EmployementType'
import ProfileCard from '../ProfileCard'
import SalaryRange from '../SalaryRange'
import JobsCard from '../JobsCard'

const totalJobsList = [
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png',
    employmentType: 'Full Time',
    id: 'd6019453-f864-4a2f-8230-6a9642a59466',
    jobDescription:
      'We’re in search of a Back-End Software Engineer that specializes in server-side components. In this role, you’ll primarily work in NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of knowledge on basic algorithms and data structures. As a Back-End Engineer, you might be architecting new features for our customers.',
    packgePerAnnum: '21 LPA',
    rating: 4,
    title: 'Backend Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png',
    employmentType: 'Full Time',
    id: '54462d29-6d8c-4b27-9a59-e0fbdbd4de0f',
    jobDescription:
      "As DevOps Developer, you are responsible for implementing next-generation CI/CD systems and automation solutions. If you thrive in a dynamic, collaborative workplace, we provide an environment where you will be challenged and inspired every single day. And if you relish the freedom to bring creative, thoughtful solutions to the table, there's no limit to what you can do.",
    packgePerAnnum: '17 LPA',
    rating: 5,
    title: 'Devops Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png',
    employmentType: 'Full Time',
    id: '00903187-11e2-4e2e-bbda-7154debce688',
    jobDescription:
      'We are building a NEW carrier facing product to replace a multitude of manual processes and tools. Our mission is to hide the technical complexity behind simple user experiences that delight our customers. Our journey has just started and the possibilities are immense.',
    packgePerAnnum: '19 LPA',
    rating: 4,
    title: 'Fullstack Developer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png',
    employmentType: 'Full Time',
    id: '0f080434-4287-4f49-9107-88227e0ddd75',
    jobDescription:
      "As an ML Engineer, you will be evaluating existing machine learning (ML) processes, performing statistical analysis to resolve data set problems, and enhancing the accuracy of our AI software's predictive automation capabilities. To ensure success as a machine learning engineer, you should demonstrate solid data science knowledge and experience in a related ML role, transforming data science prototypes and applying appropriate ML algorithms and tools.",
    packgePerAnnum: '25 LPA',
    rating: 4,
    title: 'ML Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png',
    employmentType: 'Full Time',
    id: '8d86313e-3240-4521-b078-8600edcaf05c',
    jobDescription:
      "Swiggy's StoreFront Engineering team helps customers enjoy personalized discovery and purchase experiences across multiple product lines. We are looking for engineers who have hands-on experience in building highly reliable distributed systems and have deep expertise in database design & performance tuning.",
    packgePerAnnum: '44 LPA',
    rating: 4,
    title: 'Fullstack Developer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png',
    employmentType: 'Full Time',
    id: 'ad567c55-5f75-4764-af7c-eec0ff23eb7a',
    jobDescription:
      'Drive research and development in the areas of Customer Experience, Selection, Product Quality, Competitive Intelligence, etc. keeping business goals and product planning at the front. Deliver production-ready advanced statistical or machine learning-based solutions for high-impact complex problems.',
    packgePerAnnum: '13 LPA',
    rating: 5,
    title: 'Data Scientist',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png',
    employmentType: 'Full Time',
    id: 'cbaa92a4-6d38-4e02-901d-12b62e9ca161',
    jobDescription:
      'At Google, engineers not only revolutionize search, they routinely work on massive scalability and storage solutions, large-scale applications and entirely new platforms for developers around the world. From Google Ads to Chrome, Android to YouTube, Social to Local, Google engineers are changing the world one technological achievement after another.',
    packgePerAnnum: '34 LPA',
    rating: 5,
    title: 'Backend Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png',
    employmentType: 'Full Time',
    id: '96845adc-45dd-4235-bdaf-2b8345392ea6',
    jobDescription:
      'Data Scientists at Netflix are consultants who partner with our Content, Marketing, and Product teams. We help them tell incredible stories, develop world-class campaigns, and optimize the experience of using Netflix. You will work closely with the teams to understand their insights needs; then build and deliver best-in-class research to address them.',
    packgePerAnnum: '12 LPA',
    rating: 4,
    title: 'Data Scientist',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png',
    employmentType: 'Full Time',
    id: 'ededc9c4-f0b6-4044-b1a2-7a1c6f830064',
    jobDescription:
      'As an ML Engineer, you have to develop highly scalable classifiers and tools leveraging machine learning, data regression, and rules-based models  and you have to suggest, collect and synthesize requirements and create an effective feature roadmap and adapt standard machine learning methods to best exploit modern parallel environments (e.g. distributed clusters, multicore SMP, and GPU)',
    packgePerAnnum: '25 LPA',
    rating: 5,
    title: 'ML Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png',
    employmentType: 'Full Time',
    id: '01ff7185-fef9-4e87-8f15-9d6b6a9b4dcd',
    jobDescription:
      'As an ML Engineer, you serve as the bridge between the data scientists and software engineers in product and platform teams. Build, enhance and maintain tooling, capabilities, and processes to speed up and streamline the data science lifecycle. Enable efficient deployment, monitoring, and debugging of production ML models. Work with the data science team to enable robust decision-making in terms of thinking about scale, latency, throughput, and compute cost requirements and contribute to the development of data products and services.',
    packgePerAnnum: '27 LPA',
    rating: 4,
    title: 'ML Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png',
    employmentType: 'Full Time',
    id: 'bb8c5910-279d-4c0a-aa80-7de1fc955bf6',
    jobDescription:
      'Amazon.com Retail Systems team is looking for passionate, talented, and innovative software engineers for a new team focused on strengthening and inventing to build business insights, real-time processing and machine learning technologies to learn competitive data to aid in shopping decisions.',
    packgePerAnnum: '47 LPA',
    rating: 4,
    title: 'Backend Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png',
    employmentType: 'Full Time',
    id: 'bcaf3272-6ee7-46b8-9d1a-828d1a6ed085',
    jobDescription:
      'We are looking for engineers who have hands-on experience in building highly reliable distributed systems and have deep expertise in database design & performance tuning. Knowledge of Machine Learning and other Predictive Modeling techniques will be added strength.',
    packgePerAnnum: '44 LPA',
    rating: 4,
    title: 'Backend Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png',
    employmentType: 'Part Time',
    id: '5a75b254-a812-4c2d-ae26-ec9e04234bf7',
    jobDescription:
      'The Security Operations team is seeking a new team member to assist with a large-scale Data Center Migration and application integration. This team supports customer service and several corporate functions (HR/Legal/Compliance), primarily with PayPal’s global partners that use Citrix and third-party platforms. ',
    packgePerAnnum: '38 LPA',
    rating: 4,
    title: 'Devops Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png',
    employmentType: 'Part Time',
    id: '8e035e74-eed0-4df5-a075-be9e5e752a3f',
    jobDescription:
      'Are you interested in building products used by more than a billion people? Do you like shipping codes at a rapid pace? Facebook is seeking an experienced Front End Engineer that is passionate about building mobile and desktop web applications. Together, we can help people build stronger communities.',
    packgePerAnnum: '43 LPA',
    rating: 4,
    title: 'Frontend Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png',
    employmentType: 'Part Time',
    id: '833ecdf5-769c-4756-98fa-c7ee08e5aef1',
    jobDescription:
      'As a Frontend Engineer, you will be directly responsible for helping the evolution of enterprise design systems at Google. You will engineer solutions that create shareable web components to be used in enterprise products within the organization. You’ll support multiple different product areas.',
    packgePerAnnum: '44 LPA',
    rating: 5,
    title: 'Frontend Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png',
    employmentType: 'Part Time',
    id: 'c5490daf-9274-4b1e-bce6-0dbda7b20c24',
    jobDescription:
      'The Marketplace Fulfilment Team is responsible for the entire post-order experience at Swiggy. The technology solutions built by the Marketplace Fulfilment Platform (MFP) Team are at the heart of Swiggy’s ability to deliver food to Customers. These systems power and affect the entire journey of a customer’s order.',
    packgePerAnnum: '17 LPA',
    rating: 4,
    title: 'Data Scientist',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png',
    employmentType: 'Part Time',
    id: '5d57689e-cb8f-47f5-8e18-9ce3bb6a894d',
    jobDescription:
      'The Security Operations team is seeking a new team member to assist with a large-scale Data Center Migration and application integration. This team supports customer service and several corporate functions (HR/Legal/Compliance), primarily with PayPal’s global partners that use Citrix and third-party platforms.',
    packgePerAnnum: '25 LPA',
    rating: 4,
    title: 'Devops Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png',
    employmentType: 'Part Time',
    id: '32f85617-1f00-47c9-80a7-b20c04aadcf6',
    jobDescription:
      'As a Machine Learning engineer at Zomato, you will be working on a number of interesting problems across a wide range of use cases, like restaurant recommendations, identifying and controlling spam/biased reviews, mining useful insights from reviews, classifying user photos, and even restaurant search ranking – things aimed at improving the customer experience and the product overall. As a key member of our engineering team, you will contribute to all aspects of the software life cycle design, implementation, testing, experimentation, and fixing any bugs you create. We’re looking for someone who is willing to dive deep, experiment and iterate rapidly, and get things done.',
    packgePerAnnum: '24 LPA',
    rating: 4,
    title: 'ML Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png',
    employmentType: 'Part Time',
    id: '3cc666e5-23a5-4981-ade2-61115f95ac0b',
    jobDescription:
      'The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.',
    packgePerAnnum: '14 LPA',
    rating: 5,
    title: 'Frontend Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png',
    employmentType: 'Part Time',
    id: 'fd985d0b-0f0b-40a5-81c9-5c8989180a1e',
    jobDescription:
      'As a Machine Learning engineer at Zomato, you will be working on a number of interesting problems across a wide range of use cases, like restaurant recommendations, identifying and controlling spam/biased reviews, mining useful insights from reviews, classifying user photos, and even restaurant search ranking – things aimed at improving the customer experience and the product overall. As a key member of our engineering team, you will contribute to all aspects of the software life cycle design, implementation, testing, experimentation, and fixing any bugs you create. We’re looking for someone who is willing to dive deep, experiment and iterate rapidly, and get things done.',
    packgePerAnnum: '18 LPA',
    rating: 5,
    title: 'ML Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png',
    employmentType: 'Part Time',
    id: '63e8b54a-2025-4272-b45e-54a39170dd03',
    jobDescription:
      'We are looking for a Data Scientist who will guide our businesses by pushing the boundaries of data science, machine learning, and modeling to solve complex problems in a fast-moving environment. Upon joining the team, our ideal candidate will build quantitative systems, path-breaking experiments, and models that will guide strategic decisions.',
    packgePerAnnum: '22 LPA',
    rating: 5,
    title: 'Data Scientist',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png',
    employmentType: 'Part Time',
    id: '96a6fa3f-1351-4a84-9bb3-b07ed53628d3',
    jobDescription:
      'Amazon.com Retail Systems team is looking for passionate, talented, and innovative software engineers for a new team focused on strengthening and inventing to build business insights, real-time processing and machine learning technologies to learn competitive data to aid in shopping decisions.',
    packgePerAnnum: '48 LPA',
    rating: 5,
    title: 'Backend Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png',
    employmentType: 'Part Time',
    id: '6bd26015-6df2-44c4-9e91-444bfbacdfd2',
    jobDescription:
      'As an ML Engineer, you will help define and execute the strategy and vision for enabling standard and novel experimentation practices at Netflix, including model training, ensembling and pipeline componentization, hyperparameter optimization, feature selection, and engineering, model reuse, model evaluation/validation, performance profiling, and optimization. You will build systems, infrastructure, and libraries to provide a robust and transparent platform for experimentation at scale, aiming to consistently deliver “member joy” to our platform customers. You will work within the larger Machine Learning Platform org and the applied ML research community at Netflix to set the forward-looking direction for nascent platform areas of investment like AutoML and ML Performance.',
    packgePerAnnum: '26 LPA',
    rating: 4,
    title: 'ML Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png',
    employmentType: 'Part Time',
    id: 'df664d45-8b40-4504-897c-ed3fdb6b5b02',
    jobDescription:
      'At Google, engineers not only revolutionize search, they routinely work on massive scalability and storage solutions, large-scale applications and entirely new platforms for developers around the world. From Google Ads to Chrome, Android to YouTube, Social to Local, Google engineers are changing the world one technological achievement after another.',
    packgePerAnnum: '29 LPA',
    rating: 5,
    title: 'Backend Engineer',
  },
  {
    companyLogoUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png',
    employmentType: 'Part Time',
    id: '775924df-fb9a-4d0b-beef-7f8c17e78ee8',
    jobDescription:
      'We are looking for full-stack engineers who can help us reach our mission of empowering the next generation. Your duties will include development, writing code, and documenting functionality. You should be able to build high-quality, innovative, and fully performing software in compliance with coding standards and technical design. ',
    packgePerAnnum: '49 LPA',
    rating: 5,
    title: 'Fullstack Developer',
  },
]

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
  state = {searchInput: '', jobsList: totalJobsList}

  navBarContainer = () => (
    <div className="nav_bar_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="logo"
        className="logo"
      />
      <div className="home_jobs">
        <Link to="./home">
          <p className="home">Home</p>
        </Link>
        <Link to="./jobs">
          <p className="jobs">Jobs</p>
        </Link>
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

  makingApiCall = async () => {
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    console.log(token)
    const url = `https://apis.ccbp.in/jobs?employment_type=FULLTIME,PARTTIME&minimum_package=1000000&search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    const updatedData = data.jobs.map(each => ({
      companyLogoUrl: each.company_logo_url,
      employmentType: each.employment_type,
      id: each.id,
      jobDescription: each.job_description,
      packgePerAnnum: each.package_per_annum,
      rating: each.rating,
      title: each.title,
    }))

    console.log(updatedData)

    this.setState({jobsList: updatedData})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderJobsList = () => {
    const {searchInput, jobsList} = this.state
    return (
      <div className="input_jobs_container">
        <input
          placeholder="Search Jobs"
          type="text"
          value={searchInput}
          onChange={this.onChangeSearchInput}
          className="search_input"
        />
        <ul className="result_of_job_container">
          {jobsList.map(each => (
            <JobsCard jobDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="bg_container">
        {this.navBarContainer()}
        <div className="jobs_container">
          <div className="main_container">
            {this.profileCardContainer()}
            {this.gettingEmployementTypes()}
            {this.gettingSalaryRanges()}
            <div className="get_jobs_container">
              <button
                type="button"
                className="get_jobs"
                onClick={this.makingApiCall}
              >
                Get Jobs
              </button>
            </div>
          </div>
          {this.renderJobsList()}
        </div>
      </div>
    )
  }
}

export default Jobs
