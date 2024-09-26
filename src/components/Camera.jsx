import { useThree, useFrame } from "@react-three/fiber"
import { useEffect, useState } from "react"

const CameraController = () => {
    const { camera } = useThree()
    const [mouse, setMouse] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1
            const y = (e.clientY / window.innerHeight) * 2 - 1
            setMouse({ x, y })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useFrame(() => {
        const radius = 6;
        const verticalAngleRange = Math.PI / 4;
        const horizontalSpeed = Math.PI / 4; 
    
        // Horizontal movement: rotate camera around the Y axis
        const theta = mouse.x * horizontalSpeed;
    
        // Vertical movement: move camera up and down with limits (to prevent flipping over)
        const phi = mouse.y * verticalAngleRange;
    
        camera.position.x = radius * Math.sin(theta) * Math.cos(phi);
        camera.position.y = radius * Math.sin(phi) * 1.5; // Vertical movement
        camera.position.z = radius * Math.cos(theta) * Math.cos(phi);
    
        // Make the camera always look at the center where the sphere is
        camera.lookAt(0, 0, 0);
      });

    return null
}

export default CameraController