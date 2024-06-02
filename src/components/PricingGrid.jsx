import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';

const AddItemForm = () => {
  const [formData, setFormData] = useState({ type: '', count: '', country: '', price: '' });
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let price = formData.price;
    if (name === 'type') {
      switch (value) {
        case 'Small':
          price = '100';
          break;
        case 'Medium':
          price = '150';
          break;
        case 'Large':
          price = '300';
          break;
        default:
          price = '';
          break;
      }
    }
    setFormData({ ...formData, [name]: value, price });
    setErrors({ ...errors, [name]: '' }); // Clear the error when the field is changed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = {};

    // Check if any field is empty
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrors[key] = 'This field is required';
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setItems([...items, formData]);
    setFormData({ type: '', count: '', country: '', price: '' });
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (parseFloat(item.price) * parseInt(item.count)), 0).toFixed(2);
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard>
            <MDBCardHeader style={{ backgroundColor: 'rgb(77, 20, 140)', color: 'white' }}>Add Your Items</MDBCardHeader>
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <select
                    id="type"
                    name="type"
                    className="form-control"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                  {errors.type && <div className="invalid-feedback">{errors.type}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="count">Count</label>
                  <input
                    id="count"
                    name="count"
                    type="number"
                    className={`form-control ${errors.count ? 'is-invalid' : ''}`}
                    value={formData.count}
                    onChange={handleChange}
                  />
                  {errors.count && <div className="invalid-feedback">{errors.count}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select
                    id="country"
                    name="country"
                    className="form-control"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select Country</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                  </select>
                  {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price (USD)</label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                    value={formData.price}
                    onChange={handleChange}
                  />
                  {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(77, 20, 140)', color: 'white' }}>Submit</button>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br></br>
      {items.length > 0 && (
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardHeader style={{ backgroundColor: 'rgb(77, 20, 140)', color: 'white' }}>Submitted Items</MDBCardHeader>
              <MDBCardBody>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Count</th>
                      <th>Country</th>
                      <th>Price (USD)</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.type}</td>
                        <td>{item.count}</td>
                        <td>{item.country}</td>
                        <td>{(parseFloat(item.price) * parseInt(item.count)).toFixed(2)}</td>
                        <td><button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button></td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="2"></td>
                      <td>Total:</td>
                      <td>{getTotalPrice()}</td>
                    </tr>
                  </tbody>
                </table>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
};

export default AddItemForm;
