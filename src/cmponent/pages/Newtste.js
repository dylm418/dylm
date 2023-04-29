import React, { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import './App.css';

function Newtste() {
  const [drawing, setDrawing] = useState(false);
  const canvasRef = useRef(null);
  const sourceImage = 'https://cdn.pixabay.com/photo/2023/03/22/11/07/seeds-7869190_640.jpg';
  const xSections = 10;
  const ySections = 10;

  function drawImage() {
    const canvas = canvasRef.current.canvas;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = sourceImage;
    image.onload = function() {
      const sectionWidth = image.width / xSections;
      const sectionHeight = image.height / ySections;
      let currentSection = 0;

      canvas.width = image.width;
      canvas.height = image.height;

      function drawSection() {
        // Obtenir la position X et Y de la section actuelle
        const x = currentSection % xSections;
        const y = Math.floor(currentSection / xSections);
        // Dessiner la section sur le canvas
        ctx.drawImage(
          image,
          x * sectionWidth,
          y * sectionHeight,
          sectionWidth,
          sectionHeight,
          x * sectionWidth,
          y * sectionHeight,
          sectionWidth,
          sectionHeight
        );
        // Passer à la section suivante
        currentSection++;
        // Si toutes les sections n'ont pas été dessinées, continuer à dessiner
        if (currentSection < xSections * ySections) {
          requestAnimationFrame(drawSection);
        } else {
          // Si toutes les sections ont été dessinées, terminer l'animation
          setDrawing(false);
        }
      }

      // Lancer la première section
      requestAnimationFrame(drawSection);
    };
  }

  return (
    <div className="App">
      <h1>Dessin en direct</h1>
      <button onClick={() => setDrawing(true)}>Dessiner</button>
      <CanvasDraw
        ref={canvasRef}
        hideGrid={true}
        disabled={true}
        canvasWidth={640}
        canvasHeight={427}
        brushRadius={0}
        lazyRadius={0}
        style={{ display: drawing ? 'block' : 'none' }}
      />
    </div>
  );
}

export default Newtste;
