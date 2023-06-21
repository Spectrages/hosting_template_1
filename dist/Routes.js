import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const DesktopSeventeen = React.lazy(() => import("pages/DesktopSeventeen"));
const ProjectRoutes = () => {
    return (React.createElement(React.Suspense, { fallback: React.createElement(React.Fragment, null, "Loading...") },
        React.createElement(Router, null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(DesktopSeventeen, null) })))));
};
export default ProjectRoutes;
//# sourceMappingURL=Routes.js.map