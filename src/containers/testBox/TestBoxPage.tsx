import React from "react";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import CanvasLayout from "../../components/common/CanvasLayout";

function TestBoxPage() {
  const material = shaderMaterial({}, ``, ``);
  return (
    <div>
      <CanvasLayout>
        <OrbitControls makeDefault />
        <mesh>
          <meshBasicMaterial color={"orange"} />
          <boxGeometry args={[2, 2, 2]} />
        </mesh>
      </CanvasLayout>
    </div>
  );
}

export default TestBoxPage;
