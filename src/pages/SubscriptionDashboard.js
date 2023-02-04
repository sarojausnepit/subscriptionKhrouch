// import { Layout, Menu, theme } from "antd";
// import React, { useState } from "react";
// import AllPackages from "../components/AllPackages";
// const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem("Subscription", "subscribe", [
//     getItem("All Packages", "1"),
//     getItem("Active Packages", "2"),
//   ]),
// ];

// const SubscriptionDashboard = () => {
//   const [menuKey, setMenuKey] = useState(null);

//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   const onClick = (e) => {
//     setMenuKey((prev) => e.key);
//   };

//   return (
//     <Layout>
//       <Header className="header">
//         <div className="logo" />
//       </Header>
//       <Content>
//         <Layout
//           style={{
//             background: colorBgContainer,
//           }}
//         >
//           <Sider
//             style={{
//               background: colorBgContainer,
//               minHeight:"80vh"
//             }}
//             width="20%"

//           >
//             <Menu
//               onClick={onClick}
//               style={{
//                 width: "100%",
//                 minHeight:"80vh"
//               }}
//               defaultSelectedKeys={["1"]}
//               defaultOpenKeys={["sub1"]}
//               mode="inline"
//               items={items}
//             />
//           </Sider>
//           <Content
//             style={{
//               padding: "0 24px",
//               minHeight: "80vh",
//             }}
//           >
//             <AllPackages />
//           </Content>
//         </Layout>
//       </Content>
//       <Footer
//         style={{
//           textAlign: "center",
//         }}
//       >
//         Ant Design ©2023 Created by Ant UED
//       </Footer>
//     </Layout>
//   );
// };
// export default SubscriptionDashboard;

// import { Menu, Layout } from 'antd';
// import { useState } from 'react';

// const { SubMenu } = Menu;

// function App() {
//   const [selectedKey, setSelectedKey] = useState('sub1');

//   return (
//     <Layout>
//       <Menu
//         onClick={({ key }) => setSelectedKey(key)}
//         selectedKeys={[selectedKey]}
//         mode="inline"
//       >
//         <SubMenu key="sub1" title="Subscription">
//           <Menu.Item key="allPackage">All Package</Menu.Item>
//           <Menu.Item key="activePackage">Active Package</Menu.Item>
//         </SubMenu>
//       </Menu>
//       <Layout>
//         <Content>
//           {selectedKey === 'sub1-1' && <div>Component 1</div>}
//           {selectedKey === 'sub1-2' && <div>Component 2</div>}
//           {selectedKey === 'sub2-1' && <div>Component 3</div>}
//           {selectedKey === 'sub2-2' && <div>Component 4</div>}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }

// export default App;

import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import ActivePackage from "../components/ActivePackage";
import AllPackages from "../components/AllPackages";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SubscriptionDashboard = () => {
  const [selectedKey, setSelectedKey] = useState();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Content>
        <Layout
          style={{
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
              minHeight: "80vh",
            }}
            width="20%"
          >
            <Menu
              onClick={({ key }) => setSelectedKey(key)}
              selectedKeys={[selectedKey]}
              mode="inline"
            >
              <SubMenu key="subscrip" title="Subscription">
                <Menu.Item key="allPackage">All Package</Menu.Item>
                <Menu.Item key="activePackage">Active Package</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: "80vh",
            }}
          >
           {selectedKey ==="allPackage" &&  <AllPackages />}
           {selectedKey ==="activePackage" && <ActivePackage/>}
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default SubscriptionDashboard;
