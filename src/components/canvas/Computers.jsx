import { Suspense, useEffect, useState} from 'react'
import { Canvas } from  '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1.0} 
      groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25,-1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />{/* 位置[x, y, z]，旋转[x, y, z] */}
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
    shadows
    camera={{position: [20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    frameloop='demand'
    >{/* 帧循环，阴影，相机位置和视角[x, y, z]，保持绘图缓冲区 */}
      <Suspense fallback={<CanvasLoader />}>{/* 加载时显示loader,就是个进度条 */}
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all /> {/* 预加载所有资源 */}
    </Canvas>
  )
}
export default ComputersCanvas