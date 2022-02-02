import React from 'react';
import * as dat from 'dat.gui';

interface SettingProps {
  setting: any;
  onUpdate: (data: any) => void;
}

// TODO GUI Hook 구현하기
function Setting(props: SettingProps) {
  const { setting, onUpdate } = props;
  const gui = new dat.GUI();

  return (
    <></>
    // <DatGui data={setting} onUpdate={onUpdate}>
    //   <DatBoolean path="isAwesome" label="Awesome?" />
    //   <DatNumber path={'progress'} min={0} max={1} step={0.01} />
    // </DatGui>
  );
}

export default Setting;
