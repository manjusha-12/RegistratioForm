import React, { useState } from 'react'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Data stored successfully:\n${JSON.stringify(formData, null, 2)}`);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: ''
    });
  };

  return (
    <div className="container">
      <h2>Higher Secondary Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Mobile:
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} pattern="^\d{10}$" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Gender:
          <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required /> Male
          <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} required /> Female
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </label>
        <label>
          Course:
          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Select Course</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
        </label>
        <div className="button-container">
          <button type="submit">Register</button>
          <button type="button" onClick={handleReset}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
