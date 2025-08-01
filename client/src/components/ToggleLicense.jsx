import React, { useState } from 'react';

import axios from 'axios';
import './Form.css';

export default function ToggleLicenseForm() 

{

  const [formData, setFormData] = useState({ personID: '', license: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function handleChange(event)
  {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) 
  {
    event.preventDefault();
    setMessage('');
    setError('');

    try 
    {
      await axios.post('/api/pilot_licenses/toggle', formData);

      setMessage('license status updated');
      setFormData({ personID: '', license: '' });
    } 
    catch (err) 
    {

      setError(err.response?.data?.error ||' failed to updte license status');

    }
  }

  return ( <form className="form-container" onSubmit={handleSubmit}>
      <h2>Toggle Pilot License</h2>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="personID">Person ID</label>

          <input
            id="personID" name="personID" value={formData.personID}
            onChange={handleChange} required
          />
        </div>
        <div className="form-group">

          <label htmlFor="license">License</label>
          <input

            id="license" name=" license" value={formData.license} onChange={handleChange} required
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit">Update License</button>
      </div>

      {message && <p className="message">{message}</p>}
      {error && <p className="error-text">{error}</p>}
    </form>

  );
}
