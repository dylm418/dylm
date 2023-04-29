import * as React from 'react';
import { List, arrayMove } from 'react-movable';

interface CustomContainerProps {
  tableau: string[];
  isClickable: boolean;
}

const CustomContainer: React.FC<CustomContainerProps> = ({ tableau, isClickable }) => {
  const wrapper = React.useRef<HTMLDivElement>(null);

  // Utilise le prop 'tableau' au lieu du tableau 'items'
  const [items, setItems] = React.useState(tableau);
  const [container, setContainer] = React.useState<Element | null>(null);
  React.useEffect(() => {
    setContainer(wrapper.current);
  }, [wrapper.current]);

  return (
    <div
      ref={wrapper}
      style={{
        display:"flex", justifyContent:"center", alignItems:"center"
      }}
    >
      <List
        container={container}
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props, isDragged }) => (
          <ul
            {...props}
            style={{
              padding: 0,
              cursor: isDragged ? 'grabbing' : undefined
            }}
          >
            {children}
          </ul>
        )}
        renderItem={({ value, props, isDragged, isSelected }) => (
          <li
            {...props}
            onClick={isClickable ? () => console.log(`Clicked ${value}`) : undefined}
            style={{...props.style, width: '90px', height: '40px', backgroundColor: '#FF7F50', margin: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px',
              pointerEvents: isClickable ? 'auto' : 'none', // Désactive les clics si isClickable est false
              opacity: isClickable ? 1 : 1, // Rend le composant semi-transparent si isClickable est false
              cursor: isClickable ? 'pointer' : 'default' // Change le curseur si isClickable est true ou false
            }}
          >
            {value}
          </li>
        )}
      />
    </div>
  );
};

export default CustomContainer;
