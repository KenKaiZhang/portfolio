import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./modules/About";
import Work from "./modules/Work";
import Projects from "./modules/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/work",
                element: <Work />
            },
            {
                path: "/projects",
                element: <Projects />
            }
        ]
    },

])