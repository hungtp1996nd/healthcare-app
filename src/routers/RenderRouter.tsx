import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "routers";

export default function RenderRouter() {
  return (
    <Routes>
      {ROUTERS.map((route, ps) => (
        <Route path={route.path} element={<route.element />} key={ps} />
      ))}
    </Routes>
  );
}
