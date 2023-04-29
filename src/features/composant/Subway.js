import React, { useEffect, useRef } from 'react';
import './Subway.css';

function Subway() {
  const intervalId = useRef(null);
  
  useEffect(() => {
    // Créer un nouvel objet
    
    function createObject(name) {
      // Créer un élément div pour l'objet
      var object = document.createElement("div");
      object.id = "object";
      object.textContent = name;

      // Récupérer le conteneur
      var container = document.getElementById("page-container");
      if (!container) return; // Vérifier que le conteneur existe

      // Positionner l'objet aléatoirement sur l'axe x
      var x = Math.floor(Math.random() * (container.offsetWidth - 100));
      object.style.left = x + "px";
      // Ajouter l'objet au conteneur
      container.appendChild(object);

      // Animer l'objet pour descendre sur l'axe y
      var y = window.innerHeight;
      var animation = object.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(" + y + "px)" }
        ],
        { duration: 3000 }
      );

      // Supprimer l'objet une fois l'animation terminée
      animation.onfinish = function() {
        container.removeChild(object);
      };
    }
    // Appeler la fonction createObject toutes les 2 secondes
    const items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"]
    intervalId.current = setInterval(createObject(items[Math.floor(Math.random()*items.length)]), 1000);

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

export default Subway;
