import React, { Suspense, useEffect, useRef } from "react"
import { Canvas, Camera, useThree, useFrame } from "@react-three/fiber"
import { VRCanvas, useXRFrame, DefaultXRControllers, Hands, useXR } from '@react-three/xr'
import "../styles.css"
import HappyIdle from "../components/Happy-idle"
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei"
import { Physics } from '@react-three/cannon'
import { Ground } from "../components/Ground"

function SceneCamera(props) {
    const ref = useRef()
    const set = useThree((state) => state.set)
    useEffect(() => void set({camera: ref.current }), [])
    useFrame(() => ref.current.updateMatrixWorld())
    return <perspectiveCamera ref={ref} {...props} />
}

export default function Character() {
    

    return (
    <VRCanvas shadows>
        {/* <SceneCamera position={[0, 1.6, 10]} /> */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

        <Hands />
        <DefaultXRControllers />
        <spotLight angle={0.25} penumbra={0.9} position={[10, 10, 5]} castShadow />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
            <Physics gravity={[0,-10,0]}>
                <Ground />
                <HappyIdle position={[0,0,0]}/>
            </Physics>
        </Suspense>
        <OrbitControls />
    </VRCanvas>
    )
}