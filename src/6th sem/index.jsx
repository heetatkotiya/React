import { useState } from 'react';

function ABC() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedData(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.name && <p style={{ color: 'red', fontSize: '12px' }}>{errors.name}</p>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email}</p>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', resize: 'vertical' }}
          ></textarea>
          {errors.message && <p style={{ color: 'red', fontSize: '12px' }}>{errors.message}</p>}
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default ABC;
