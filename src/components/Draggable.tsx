import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

function Draggable() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
  })
  
  // Bind it to a component
  return (
    <div id="drag" style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...bind,
      }} {...bind()}>
        <p>hello</p>
    </div>
  ); 
}

export default Draggable