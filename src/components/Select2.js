import Form from 'react-bootstrap/Form';
import './Select.css'
function Select2() {
  return (
    <Form.Select aria-label="Default select example" className='box'>
      <option>city, state , Zip</option>
      <option value="1">Kathmandu</option>
      <option value="2">Pokhara</option>
      <option value="3">Baglung</option>
      <option value="4">Butwal</option>
    </Form.Select>
  );
}

export default Select2;