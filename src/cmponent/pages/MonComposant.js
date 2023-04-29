import React from "react";
import "./styl.css";

function MonComposant() {
  return (
    <div className="grid">
      <div className="item item-left">
        <h2>Élément à gauche</h2>
      </div>
      <div className="item item-right">
        <h2>Élément supérieur droit</h2>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            a lectus vel dictum. Maecenas tempor ipsum ut diam dapibus, nec
            bibendum purus aliquet. Sed ut neque nec mauris ultricies dictum
            quis sed enim. Nullam vel tellus scelerisque, lacinia nisi in,
            lobortis quam.
          </p>
        </div>
      </div>
      <div className="item item-right">
        <h2>Élément inférieur droit</h2>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            a lectus vel dictum. Maecenas tempor ipsum ut diam dapibus, nec
            bibendum purus aliquet. Sed ut neque nec mauris ultricies dictum
            quis sed enim. Nullam vel tellus scelerisque, lacinia nisi in,
            lobortis quam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MonComposant;

