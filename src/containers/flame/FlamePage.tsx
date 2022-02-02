import CanvasLayout from 'components/common/CanvasLayout';
import React, { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import DatGui, { DatNumber } from 'react-dat-gui';
import Setting from './components/Setting';

function FlamePage() {
  const DynamicFlameMesh = dynamic(() => import('./components/FlameMesh'));
  const DynamicSetting = dynamic(() => import('./components/Setting'));
  const [setting, setSetting] = useState({
    progress: 0,
  });

  const updateSetting = ({ progress }: any) => {
    setSetting({ progress });
  };

  return (
    <>
      <DynamicSetting setting={setting} onUpdate={updateSetting} />
      <CanvasLayout>
        <Suspense fallback={null}>
          <DynamicFlameMesh />
        </Suspense>
      </CanvasLayout>
    </>
  );
}

export default FlamePage;
