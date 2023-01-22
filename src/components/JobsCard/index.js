import './index.css'

const JobsCard = props => {
  const {jobDetails} = props
  const {
    id,
    rating,
    title,
    jobDescription,
    employementType,
    packagePerAnnum,
    companyLogoUrl,
  } = jobDetails
  return (
    <li className="job_item">
      <div className="image_container">
        <img src={companyLogoUrl} alt={id} className="logo_image" />
      </div>
      <div className="job_details_rating_container">
        <h1 className="job_heading">{title}</h1>
      </div>
      <p className="job_description">{jobDescription}</p>
    </li>
  )
}

export default JobsCard
