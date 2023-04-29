import './ExploreContainer.css';
import { useSpring, animated } from '@react-spring/web';
import { useRef } from 'react';
import { increment, decrement, incrementByAmount } from "../store/counterSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import Subway from '../features/composant/Subway';
import Subwx from '../features/composant/Subwx';

const Horizontal: React.FC = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item9', 'Item10', 'Item11', 'Item12'];
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 1000 },
    config: {
      duration: 10000
    },
    loop: true,
  });

  return (
  <div>
      <Subwx></Subwx>
  </div>
  );
};

export default Horizontal;
