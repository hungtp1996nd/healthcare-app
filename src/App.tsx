import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Achivement from "./components/Achivement";

function App() {
  return <Layout>Hello world!

    <Achivement date="5/21" percent={60} />
  </Layout>;
}

export default App;
