import { Layout } from "antd";
import {  Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

// const items: MenuProps["items"] = [

//   {
//     key: "2",
//     label: <NavLink to={'/admin/dashboard'}>Dashboard</NavLink>
//   },
//   {
//     key: "3",
//     label: "User Management",
//     children: [
//       {
//         key: "11",
//         label: <NavLink to={'/admin/create-admin'}>Create Admin</NavLink>
//       },
//       {
//         key: "12",
//         label: <NavLink to={'/admin/create-faculty'}>Create Student</NavLink>
//       },
//       {
//         key: "13",
//         label: <NavLink to={'/admin/create-student'}>Create Faculty</NavLink>
//       },
//     ],
//   },
// ];

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
