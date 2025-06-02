import "./App.css";
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import Root from "./pages/Root";
import ContactPage from "./pages/ContactPage.";
import Project from "./pages/Project";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="projects" element={<ProjectPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="projects/:projectTitle" element={<Project />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
