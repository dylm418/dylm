import { useState } from "react";
import './App.css';

const items = ["Abricot", "Airelle", "Amande", "Ananas", "Avocat", "Banane", "Cassis", "Cerise", "Châtaigne", "Citron"];

const DragToReorderList = () => {
  const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: null,
    updatedOrder: null,
  };
  
  const [list, setList] = useState(items);
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

  const onDragStart = (event, index) => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: index,
      isDragging: true,
      originalOrder: list,
    });

    event.dataTransfer.setData("text/html", "");
  };

  const onDragOver = (event, index) => {
    event.preventDefault();

    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = index;

    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter((item, index) => index !== draggedFrom);

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = () => {
    setList(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  return (
    <section>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              data-position={index}
              draggable
              onDragStart={(event) => onDragStart(event, index)}
              onDragOver={(event) => onDragOver(event, index)}
              onDrop={onDrop}
              onDragLeave={onDragLeave}
              className={dragAndDrop && dragAndDrop.draggedTo === index ? "dropArea" : ""}
            >
              <p>{list[index]}</p>
              <i className="fas fa-arrows-alt-v"></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DragToReorderList;



