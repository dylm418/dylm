import * as React from 'react';
import { List, arrayMove } from 'react-movable';

const VaryingHeights: React.FC = () => {
  const [items, setItems] = React.useState([
    '70px Item 1',
    '100px Item 2',
    '70px Item 3',
    '70px Item 4',
    '150px Item 5'
  ]);
  return (
    <div
      style={{
        maxWidth: '300px',
        margin: '0px auto',
        backgroundColor: '#F7F7F7',
        padding: '3em'
      }}
    >
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props, isDragged }) => (
          <ul
            {...props}
            style={{ padding: 0, cursor: isDragged ? 'grabbing' : undefined }}
          >
            {children}
          </ul>
        )}
        renderItem={({ value, props, isDragged, isSelected }) => (
          <li
            {...props}
            style={{
              ...props.style,
              padding: '1.5em',
              margin: '0.5em 0em',
              display: 'flex',
              alignItems: 'center',
              listStyleType: 'none',
              cursor: isDragged ? 'grabbing' : 'grab',
              border: '2px solid #CCC',
              boxShadow: '3px 3px #AAA',
              color: '#333',
              borderRadius: '5px',
              fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
              backgroundColor: isDragged || isSelected ? '#EEE' : '#FFF',
              height: `${parseInt(value, 10)}px`
            }}
          >
            {value}
          </li>
        )}
      />
    </div>
  );
};

export default VaryingHeights;
