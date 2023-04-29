import React, { useEffect, useRef } from 'react';
import './Subway.css';

function Subwx() {
  const intervalId = useRef(null);

  useEffect(() => {
    // Créer un nouvel objet
    function createObject() {
      // Créer un élément div pour l'objet
      var object = document.createElement("div");
      object.id = "object";
      object.textContent = "Hello";

      // Récupérer le conteneur
      var container = document.getElementById("page-container");
      if (!container) return; // Vérifier que le conteneur existe

      // Positionner l'objet aléatoirement sur l'axe y
      var y = Math.floor(Math.random() * (container.offsetHeight - 100));
      object.style.top = y + "px";
      // Ajouter l'objet au conteneur
      container.appendChild(object);

      // Animer l'objet pour se déplacer sur l'axe x
      var x = -100;
      var animation = object.animate(
        [
          { transform: "translateX(" + x + "px)" },
          { transform: "translateX(" + container.offsetWidth + "px)" }
        ],
        { duration: 3000 }
      );

      // Supprimer l'objet une fois l'animation terminée
      animation.onfinish = function() {
        container.removeChild(object);
      };
    }

    // Appeler la fonction createObject toutes les 2 secondes
    intervalId.current = setInterval(createObject, 2000);

    // Nettoyer l'interval lorsqu'on démonte le composant
    return () => clearInterval(intervalId.current);
  }, []);

  return (
    <div id="page-container">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}

export default Subwx;
