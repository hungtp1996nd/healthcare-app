import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import RenderRouter from "./routers/RenderRouter";

function App() {
  return (
    <Layout>
      <RenderRouter />
    </Layout>
  );
}

export default App;
