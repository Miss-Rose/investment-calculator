export const InputGroup = ({ label, value, onChange }) => {

  return (
    <div>
      <label>{ label }</label>
      <input value={value} type="number"
             onChange={onChange}
             required
      />
    </div>
  )
}