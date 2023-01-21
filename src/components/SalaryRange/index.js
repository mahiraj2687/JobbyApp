import './index.css'

const SalaryRange = props => {
  const {salaryDetails} = props
  const {label} = salaryDetails

  return (
    <li className="check_type_container">
      <input type="checkbox" className="input" />
      <p className="label">{label}</p>
    </li>
  )
}
export default SalaryRange
