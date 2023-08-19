import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MainLayout from "./layout/MainLayout";
import { sidebarRoutes } from "./utils/routing";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {sidebarRoutes.map(({ path, Element }, index) => (
            <Route key={index} path={path} element={<Element />} />
          ))}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
