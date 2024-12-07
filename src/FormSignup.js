import React, { useState } from 'react';
import { validateEmail, validatePassword, validateName } from './components/validation/form_validation';

const FormSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [favoriteSeason, setFavoriteSeason] = useState('Spring');

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!validateName(firstName)) {
      newErrors.firstName = 'First name can only contain alphabets.';
    }
    if (!validateName(lastName)) {
      newErrors.lastName = 'Last name can only contain alphabets.';
    }
    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!validatePassword(password)) {
      newErrors.password = 'Password must have at least 1 uppercase, 1 lowercase, 1 number, and 1 special character.';
    }
    if (!['Spring', 'Fall', 'Winter'].includes(favoriteSeason)) {
      newErrors.favoriteSeason = 'Please select a valid season.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div>
        <h2>Profile Page</h2>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Favorite Season:</strong> {favoriteSeason}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
        </label>
        {errors.firstName && <p style={{color: 'red'}}>{errors.firstName}</p>}
      </div>

      <div>
        <label>
          Last Name:
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
          />
        </label>
        {errors.lastName && <p style={{color: 'red'}}>{errors.lastName}</p>}
      </div>

      <div>
        <label>
          Email:
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
      </div>

      <div>
        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
      </div>

      <div>
        <label>
          Favorite Season:
          <select value={favoriteSeason} onChange={(e) => setFavoriteSeason(e.target.value)}>
            <option value="Spring">Spring</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
        </label>
        {errors.favoriteSeason && <p style={{color: 'red'}}>{errors.favoriteSeason}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSignup