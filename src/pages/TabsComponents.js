import { Button, Tabs } from 'antd';
import { useRef, useState } from 'react';
const defaultPanes = new Array(2).fill(null).map((_, index) => {
  const id = String(index + 1);
  return {
    label: `Tab ${id}`,
    children: `Content of Tab Pane ${index + 1}`,
    key: id,
  };
});
const TabsComponents= () => {
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [items, setItems] = useState(defaultPanes);

  const onChange = (key) => {
    setActiveKey(key);
  };


  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >

      </div>
      <Tabs
        hideAdd
        onChange={onChange}
        // activeKey={activeKey}
        type="editable-card"
        items={items}
      />
    </div>
  );
};
export default TabsComponents;