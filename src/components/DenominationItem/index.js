// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachItem, changeAmount} = props
  const {value} = eachItem

  const onClickingButt = () => {
    changeAmount(value)
  }

  return (
    <li>
      <button
        className="value-container"
        onClick={onClickingButt}
        type="button"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
