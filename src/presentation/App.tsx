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

import "swiper/css";
import AppLayout from "./layout/appLayout/AppLayout";
import ScrollToTop from "./components/common/ScrollToTop";

function isAuthenticated(): boolean {
  // اینجا باید منطق احراز هویت خود را بنویسید
  return true; // برای مثال
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<RouteWithAuth component={AppLayout} />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          {routes.map(
            (route, index) =>
              route.requiresAuth && (
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
        </Route>
        {routes.map(
          (route, index) =>
            !route.requiresAuth && (
              <Route
                key={index}
                path={route.path}
                element={<RouteWithAuth component={route.component} />}
              />
            )
        )}
      </Routes>
    </Router>
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
