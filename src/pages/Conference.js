import React, { Suspense, useEffect, useRef } from "react"
import { Canvas, Camera, useThree } from "@react-three/fiber"
import { VRCanvas, useXRFrame, DefaultXRControllers, Hands, useXR } from '@react-three/xr'
import "../styles.css"
import ConferenceRoom from '../components/ConferenceRoom'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Physics } from '@react-three/cannon'

// function SceneCamera() {
//     const ref = useRef()
//     const { camera, setDefaultCamera } = useThree()
    
//     useEffect(() => {
//         camera.fov = 75
//         camera.lookAt(0,2,0)
//         camera.position.set(1,1,1)
//     }, [])

//     return <PerspectiveCamera makeDefault></PerspectiveCamera>
// }

// function VRCamera() {
//     const { player } = useXR()

//     useEffect(() => {
//         player.position.set(4,0,0)
//     })
//     return null
// }

export default function ConferencePage() {
    

    return (
    <VRCanvas camera={{ fov: 75, position:[0,1.6,0]}}>
        {/* <SceneCamera /> */}
        <Hands />
        <DefaultXRControllers />
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.9} />
        <Suspense fallback={null}>
            <Physics gravity={[0,-30,0]}>
                <ConferenceRoom position={[-4,0,0]} />
            </Physics>
        </Suspense>
        <OrbitControls />
        {/* <VRCamera /> */}
    </VRCanvas>
    )
}