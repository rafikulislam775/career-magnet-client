import { Outlet } from "react-router-dom";
import Layout from "./Layout";

const MainLayout = () => {
  return (
    <div>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </div>
  );
};

export default MainLayout;
