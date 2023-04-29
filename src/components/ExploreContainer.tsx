import './ExploreContainer.css';
import { useSpring, animated } from '@react-spring/web' //npm i @use-gesture/react
import { useRef } from 'react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const springs = useSpring({
    from: { y: 0 },
    to: { y: 1000 },    
    config: {
      duration: 10000
    },
    loop: true,

  })

  return (
    <div>
      <p>name</p>
      <animated.div className={"data"}
        style={{
          width: 80,
          height: 80,
          background: '#ff6d6d',
          borderRadius: 8,
          ...springs,
        }}
      />      
    </div>

  );
};

export default ExploreContainer;






