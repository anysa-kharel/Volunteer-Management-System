import Form from 'react-bootstrap/Form';
import './Select.css'
function Select1() {
  return (
    <Form.Select aria-label="Default select example" className='box'>
      <option>Sector, Interested field</option>
      <option value="1">Environment</option>
      <option value="2">Business</option>
      <option value="3">Public health</option>
      <option value="4">Engineering</option>
    </Form.Select>
  );
}

export default Select1;