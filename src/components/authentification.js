// Authentification.js
import React, { useState } from 'react';

const Authentification = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'authentification
  };

  return (
    isOpen && (
      <div className="auth-modal">
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
          <button type="submit">Se Connecter</button>
        </form>
        <button onClick={onClose}>Fermer</button>
      </div>
    )
  );
};

export default Authentification;
