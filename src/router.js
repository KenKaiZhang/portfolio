import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./modules/About";
import Projects from "./modules/Projects";
import Landing from "./modules/Landing/Landing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Landing />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/projects",
                element: <Projects />
            }
        ]
    },

])