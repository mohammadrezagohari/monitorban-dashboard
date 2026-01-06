// App.tsx
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { routes } from "./routes/routes";
// @ts-ignore
import "./App.css";
// @ts-ignore
import "swiper/css";
import AppLayout from "./layout/appLayout/AppLayout";
import ScrollToTop from "./components/common/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { useTheme } from "@mui/material";

function isAuthenticated(): boolean {
  // اینجا باید منطق احراز هویت خود را بنویسید
  return true; // برای مثال
}

const queryClient = new QueryClient();

export default function App() {
  const theme = useTheme();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}

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

      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          duration: 4000,
          style: {
            fontFamily: "Dana",
            border: `1px solid ${theme.palette.neutral[100]}`,
            backgroundColor: theme.palette.neutral[600],
            color: theme.palette.neutral.main,
          },
        }}
      />
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
