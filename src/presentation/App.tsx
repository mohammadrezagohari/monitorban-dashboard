// App.tsx
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { routes } from './routes/routes';
function isAuthenticated(): boolean {
    // اینجا باید منطق احراز هویت خود را بنویسید
    return true; // برای مثال
}

export default function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
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
                ))}
            </Routes>
        </Router>
    );
}

interface RouteWithAuthProps {
    requiresAuth?: boolean;
    component: React.ComponentType;
}

function RouteWithAuth({ requiresAuth, component: Component }: RouteWithAuthProps) {
    const location = useLocation();

    if (requiresAuth && !isAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return <Component />;
}
