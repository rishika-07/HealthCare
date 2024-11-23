import React, { useState } from 'react';
import './DashboardForm.css';

const DashboardForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="Form-popup">
      <div className="Form-container">
        <div className="left-side">
          <div className="signup-box">
            <h2>Healthcare Dashboard</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="file">Upload File</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button type="submit" className="signup-button">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="right-side">
          <h3>Welcome to Healthcare Dashboard</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardForm;

