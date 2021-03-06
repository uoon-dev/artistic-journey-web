import React from "react";
import { OrbitControls } from "@react-three/drei";
import CanvasLayout from "../../components/common/CanvasLayout";

function ParticlesPage() {
  return (
    <div>
      <CanvasLayout>
        <OrbitControls makeDefault />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          {/*<meshBasicMaterial color={"orange"} />*/}
        </mesh>
      </CanvasLayout>
    </div>
  );
}

export default ParticlesPage;
