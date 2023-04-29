import React, { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';

function DraggableObject(props) {
    const [{ x }, api] = useSpring(() => ({ x: 0 }))
    const bind = useDrag(({ offset: [x] }) => api.start({ x }), {
        // Add a grab cursor when the user clicks and holds the object
        drag: () => {
            document.body.style.cursor = 'grabbing';
        },
        // Remove the grab cursor when the user releases the object
        dragEnd: () => {
            document.body.style.cursor = 'default';
        }
    });
    const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const widths = deviceWidth*0.23;
    const heights = deviceHeight*0.05;

    return (
        <animated.div {...bind()} style={{ x, position: 'absolute', bottom: 0, backgroundColor: 'chocolate', width:`${widths}px`, height:`${heights}px`, borderRadius:7, cursor: 'grab' }}>
            <p id={props.thid} style={{textAlign: 'center', color: 'white', fontSize: 14}}>Drag me!</p>
        </animated.div>     
    );
}

export default DraggableObject;
