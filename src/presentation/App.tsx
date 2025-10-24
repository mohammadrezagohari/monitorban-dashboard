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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function isAuthenticated(): boolean {
  // اینجا باید منطق احراز هویت خود را بنویسید
  return true; // برای مثال
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

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
    </QueryClientProvider>
  );
}

interface RouteWithAuthProps {
  requiresAuth?: boolean;
  component: React.ComponentType<any>;
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
