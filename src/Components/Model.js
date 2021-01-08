import { OrbitControls, draco } from "@react-three/drei";
import React from "react";
import Room from "./models/room.gltf";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "react-three-fiber";

// function Model() {
//     const room = useGLTF(Room, true);
//     return (
//         <div className="room">
//         <primitive object={room.scene} position={[0, 0, 0]} />
//         <OrbitControls />
//         </div>
//     );
// }

// export default Model;

export default function Model() {
    const { scene } = useLoader(GLTFLoader, Room, draco());
    return <primitive object={scene} dispose={null} />
  }
