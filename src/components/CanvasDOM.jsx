import { useLayoutEffect, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import PlaneBlock from './PlaneBlock';
import ElementBlock from './ElementBlock';
import { computeHeadingLevel } from '@testing-library/react';

const CanvasDOM = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [bounds, setBounds] = useState();

  useLayoutEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setBounds(document.querySelector('.element-block').getBoundingClientRect());
    }

    window.addEventListener('resize', handleResize);
    handleResize();


  },[]);


  return (
    <>
      <ElementBlock />
      <div style={{"position": "fixed", "top": "0", "left": "0", width: "100vw", height: "100vh" }}>
        <Canvas
            camera={{fov: 2 * Math.atan((height / 2) / 600 ) * (180 / Math.PI), near: 0.1, far: 2000, position: [0, 0, 600]}}
          >
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 600]}
            fov={2 * Math.atan((window.innerHeight / 2) / 600 ) * (180 / Math.PI)}
            near={0.1}
            far={2000}
            onUpdate={(c) => {
              console.log(c);
              c.fov = 2 * Math.atan((window.innerHeight / 2) / 600 ) * (180 / Math.PI);
              c.updateProjectionMatrix();
            }}
          />
          <PlaneBlock width={bounds?.width} height={bounds?.height} top={bounds?.top} left={bounds?.left} />
        </Canvas>
      </div>
    </>
   );
}

export default CanvasDOM;