import React from "react";
import { Canvas } from "@react-three/fiber";

interface Props {
  children: React.ReactNode;
}

function CanvasLayout({ children }: Props) {
  return <Canvas>{children}</Canvas>;
}

export default CanvasLayout;
