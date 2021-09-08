import React, { Suspense, useEffect, useRef } from "react"
import { Canvas, Camera, useThree } from "@react-three/fiber"
import { VRCanvas, useXRFrame, DefaultXRControllers, Hands } from '@react-three/xr'
import "../styles.css"
import HappyIdle from "../components/Happy-idle"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Physics } from '@react-three/cannon'
import { Ground } from "../components/Ground"

function SceneCamera() {
    const { camera } = useThree()
    
    useEffect(() => {
        camera.fov = 75
        camera.position.set([0,1.6,2])
        camera.rotateY(0)
    }, [])

    return <PerspectiveCamera makeDefault></PerspectiveCamera>
}

export default function Character() {
    

    return (
    <VRCanvas>
        <Hands />
        <DefaultXRControllers />
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.9} />
        <Suspense fallback={null}>
            <Physics gravity={[0,-30,0]}>
                <Ground position={[0, 0, 0]}/>
                <HappyIdle position={[0,0,0]}/>
            </Physics>
        </Suspense>
        <OrbitControls />
    </VRCanvas>
    )
}