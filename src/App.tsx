import Layout from "./template/Layout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CreateAccount from "./pages/create-accout";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
