import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTERS, ROUTERS_PUBLIC } from "routers";

export default function RenderRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace={true} to="/home-page" />} />
      {ROUTERS.map((route, ps) => (
        <Route
          path={route.path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <route.element />
            </Suspense>
          }
          key={ps}
        />
      ))}
      {ROUTERS_PUBLIC.map((route, ps) => (
        <Route
          path={route.path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <route.element />
            </Suspense>
          }
          key={ps}
        />
      ))}
    </Routes>
  );
}
