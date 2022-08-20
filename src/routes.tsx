import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
