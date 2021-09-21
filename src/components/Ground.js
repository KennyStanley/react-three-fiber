import React from "react"
import { usePlane } from "@react-three/cannon"

export function Ground(props) {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0],
      position: [0, 0, 0],
      type: 'Static', ...props }))
    return (
      <mesh ref={ref} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshStandardMaterial attach="material" color="#999999" />
      </mesh>
    )
  }