import { Children, useState } from 'react';

const PlaneBlock = (props) => {
  const [bounds, setBounds] = useState(props);
  let { left, top, width, height } = bounds;

  const handleScroll = () => {
    setBounds(document.querySelector('.element-block').getBoundingClientRect());
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <mesh position={[left - window.innerWidth / 2 + width / 2, - top + window.innerHeight / 2 - height / 2, 0]}>
        <planeBufferGeometry attach="geometry" args={[props.width, props.height, 1, 1]} />
        <meshBasicMaterial attach="material" color="red" />
      </mesh>
    </>
   );
}

export default PlaneBlock;