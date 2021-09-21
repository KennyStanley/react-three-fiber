import React from "react"
import { useBox } from "@react-three/cannon"

export const Cube = (props) => {
    const [ref] = useBox(() => ({mass: 1, ...props}))

    return (
        <mesh ref={ref} castShadow receiveShadow>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="teal"/>
        </mesh>
    )
}