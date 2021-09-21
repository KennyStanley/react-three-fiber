import React, { Suspense, useEffect, useRef } from "react"
import { Canvas, Camera, useThree } from "@react-three/fiber"
import { VRCanvas, useXRFrame, DefaultXRControllers, Hands, useXR, RayGrab } from '@react-three/xr'
import "../styles.css"
import { OrbitControls, PerspectiveCamera, useFBX, Stars } from "@react-three/drei"
import { Physics } from '@react-three/cannon'
import { Ground } from "../components/Ground"
import { Cube } from "../components/Cube"

function Move() {
    const { player, controllers } = useXR()

    useEffect(() => {
        console.log(controllers)
    }, [controllers])
    return null
}

export default function Playground() {

    return (
    <VRCanvas shadows camera={{ fov: 75, position:[1,1,1.5]}}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <Move />
        <Hands />
        <DefaultXRControllers />
        <spotLight angle={0.25} penumbra={0.9} position={[10, 10, 5]} castShadow />
        <ambientLight intensity={0.5} />
        <Physics 
            defaultContactMaterial={{
                friction: 0.9,
                restitution: 0.7,
                contactEquationStiffness: 1e6,
                contactEquationRelaxation: 1,
                frictionEquationStiffness: 1e7,
                frictionEquationRelaxation: 2,
            }} 
            gravity={[0,-10,0]}>
            <Suspense fallback={null}>
                <Ground />
                <RayGrab>
                    <Cube position={[0,1,-1.5]}/>
                </RayGrab>
            </Suspense>
        </Physics>
        <OrbitControls />
    </VRCanvas>
    )
}