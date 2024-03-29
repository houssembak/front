// ParentComponent.js
import React, { useState } from "react";
import Authentification from "./components/authentification";

const ParentComponent = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div>
      <nav>
        <ul>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#tm-section-5"
              onClick={openAuthModal}
            >
              Se Connecter
            </a>
          </li>
        </ul>
      </nav>

      <Authentification isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default ParentComponent;
