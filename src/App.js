import React from "react";
import ParentComponent from "./components/ParentComponent"; // Assurez-vous que le chemin est correct

const App = () => {
  return (
    <div className="app-container">
      <h1>Mon Application</h1>
      {/* Utilisation de ParentComponent pour afficher le lien "Se Connecter" */}
      <ParentComponent />
    </div>
  );
};

export default App;
