import './index.css'

const EmployementType = props => {
  const {employementDetails} = props
  const {label, employmentTypeId} = employementDetails

  return (
    <li className="check_type_container">
      <input id={employmentTypeId} type="checkbox" className="input" />
      <p className="label">{label}</p>
    </li>
  )
}
export default EmployementType
