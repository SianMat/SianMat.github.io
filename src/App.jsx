import "./App.css";
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import ProjectPage from "./pages/ProjectPage";
import Root from "./pages/Root";
import ContactPage from "./pages/ContactPage.";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="projects" element={<ProjectPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
