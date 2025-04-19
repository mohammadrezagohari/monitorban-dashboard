// routes.ts
import { RegisterPage } from '../pages/auth/Register';
import { DashboardPage } from '../pages/dashboard';
import HomePage from '../pages/HomePage';
import Sensors from '../feature/test/SensorsPage';
import Dashboard from '../feature/test/dashboard/DashboardPage';
import ServerRoom from '../feature/test/ServerRoomPage';
import Reports from '../feature/test/ReportsPage';
import UserManagment from '../feature/test/UserManagmentPage';
import Educations from '../feature/test/EducationsPage';
import Support from '../feature/test/SupportPage';
import Settings from '../feature/test/SettingsPage';
import Test from '../feature/test/testPage';
import LoginPage from '../feature/login/Login';
import { LoginPage2 } from '../pages/auth/Login';

export const routes = [
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/login2',
        component: LoginPage2,
    },
    {
        path: '/register',
        component: RegisterPage,
    },
    {
        path: '/test',
        component: Test,
        children: [
            {
                path: "dashboard",
                component: Dashboard,
            },
            {
                path: "sensors",
                component: Sensors,
            },
            {
                path: "server-room",
                component: ServerRoom,
            },
            {
                path: "reports",
                component: Reports,
            },
            {
                path: "user-managment",
                component: UserManagment,
            },
            {
                path: "educations",
                component: Educations,
            },
            {
                path: "support",
                component: Support,
            },
            {
                path: "settings",
                component: Settings,
            },
        ]
    },
    {
        path: '/dashboard',
        component: DashboardPage,
        requiresAuth: true,
    },
    {
        path: '/',
        component: HomePage,
        requiresAuth: true,
    },

];
