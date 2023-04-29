import React, { useRef } from 'react'
import Draggable from 'react-draggable';
import { useGesture, useDrag, useMove, useScroll } from '@use-gesture/react'
import { useSprings, animated, interpolate } from '@react-spring/web'

// Returns fitting styles for dragged/idle items

export default function DraggableList() {
  const eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
  };
  return (
    <div>
        <Draggable>
        <div>I can now be moved around!</div>
        </Draggable>
        <Draggable>
        <div>I can now be moved around!2</div>
        </Draggable>
    </div>
  )
}
