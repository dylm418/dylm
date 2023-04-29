import './ExploreContainer.css';
import './Horizontal.css';
import { useSpring, animated } from '@react-spring/web';
import { useRef } from 'react';
import { increment, decrement, incrementByAmount } from "../store/counterSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import Box from '../features/composant/Box';
import Quiz from '../features/composant/Quiz';
import Card from '../features/composant/Card';
import Subway from '../features/composant/Subway';
import Qcmword from '../cmponent/pages/Qcmword';
import Sldrmd from '../cmponent/pages/Sldrmd';
import Motmls from '../cmponent/pages/Motmls';

const Vertical: React.FC = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item9', 'Item10', 'Item11', 'Item12'];
  const springs = useSpring({
    from: { y: -1000 },
    to: { y: 1000 },
    config: {
      duration: 11000
    },
    loop: true,
  });

  return (
  <div className="grille">
      <Qcmword></Qcmword>
  </div>
  );
};

export default Vertical;
