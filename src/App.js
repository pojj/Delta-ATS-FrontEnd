import "./App.css";
import LoginForm from "./LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="login" element={<LoginForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
