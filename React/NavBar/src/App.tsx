import { Routes, Route, Navigate } from "react-router-dom";
import * as Page from "./Page/import";

function App() {
  return (
      <div className="overflow-hidden">
        <Routes>

        <Route path="" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Page.Home />} />
          <Route path="/about" element={<Page.About />} />
          <Route path="/contact" element={<Page.Contact />} />
          <Route path="/services" element={<Page.Services />} />
          <Route path="/login" element={<Page.Login />} />
        </Routes>
      </div>
  );
}

export default App;