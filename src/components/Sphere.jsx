import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

const Sphere = () => {
    const radius = 4;
    const sphereRef = useRef(null);
    const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim();

    useFrame(() => {
        if (!sphereRef.current) return;

        const { position } = sphereRef.current.attributes;

        for (let i = 0; i < position.count; i++) {
            // Original position
            const x = position.getX(i);
            const y = position.getY(i);
            const z = position.getZ(i);

            // Create a vector from the original position
            const originalVector = new THREE.Vector3(x, y, z);

            // Random offset with a scaling factor
            const offset = Math.random() * 0.02; // Adjust how far the point moves
            const randomDirection = new THREE.Vector3(
                (Math.random() - 0.5),
                (Math.random() - 0.5),
                (Math.random() - 0.5)
            ).normalize(); // Normalize to ensure it's a direction vector

            // Blend between the original position and the random direction
            const newPosition = originalVector
                .clone()
                .add(randomDirection.multiplyScalar(offset));

            // Normalize the new position to maintain the spherical shape
            newPosition.normalize().multiplyScalar(radius);

            // Set the new position
            position.setXYZ(i, newPosition.x, newPosition.y, newPosition.z);
        }

        position.needsUpdate = true;
    });

    return (
        <points>
            <sphereGeometry args={[1, 100, 100]} ref={sphereRef} />
            <pointsMaterial color={`rgb(${currentColor})`} size={0.015} />
        </points>
    );
};

export default Sphere;
