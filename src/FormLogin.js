import React, { useState } from 'react';
import { validateEmail, validatePassword } from './components/validation/form_validation';
import { useNavigate } from 'react-router-dom';

const FormLogin = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [favoriteSeason, setFavoriteSeason] = useState('Spring');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email.';
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must have uppercase, lowercase, number, and special character.';
    }

    if (!['Spring', 'Fall', 'Winter'].includes(favoriteSeason)) {
      newErrors.favoriteSeason = 'Please select a valid season.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If all validations pass, set the user and redirect
    setUser({ email, favoriteSeason });
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Login Form</h2>

      <div>
        <label>
          Email:
          <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
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
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
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
        {errors.favoriteSeason && <div style={{ color: 'red' }}>{errors.favoriteSeason}</div>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default FormLogin;