import Form from 'react-bootstrap/Form';
import './Select.css'
function Select3() {
  return (
    <Form.Select aria-label="Default select example" className='box'>
      <option>Select Type</option>
      <option value="1">Paid</option>
      <option value="2">Unpaid</option>
      
    </Form.Select>
   );
}

export default Select3;