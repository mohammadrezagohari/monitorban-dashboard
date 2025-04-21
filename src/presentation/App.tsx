// App.tsx
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { routes } from "./routes/routes";
import "./App.css";
import { Box } from "@mui/material";

import "swiper/css"

function isAuthenticated(): boolean {
  // اینجا باید منطق احراز هویت خود را بنویسید
  return true; // برای مثال
}

export default function App() {
  return (
    <Box dir="rtl" sx={{ backgroundColor: "background.default" }}>
      <Router>
        <Routes>
          {routes.map((route, index) =>
            route.children ? (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              >
                {route.children?.map((child, childIndex) => (
                  <Route
                    key={childIndex}
                    path={child.path}
                    element={<child.component />}
                  />
                ))}
              </Route>
            ) : (
              <Route
                key={index}
                path={route.path}
                element={
                  <RouteWithAuth
                    requiresAuth={route.requiresAuth}
                    component={route.component}
                  />
                }
              />
            )
          )}
        </Routes>
      </Router>
    </Box>
  );
}

interface RouteWithAuthProps {
  requiresAuth?: boolean;
  component: React.ComponentType;
}

function RouteWithAuth({
  requiresAuth,
  component: Component,
}: RouteWithAuthProps) {
  const location = useLocation();

  if (requiresAuth && !isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Component />;
}
