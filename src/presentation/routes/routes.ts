// routes.ts
import { RegisterPage } from '../pages/auth/Register';
import { DashboardPage } from '../pages/dashboard';
import HomePage from '../pages/HomePage';
import Sensors from '../feature/test/sensors/SensorsPage';
import Dashboard from '../feature/test/dashboard/DashboardPage';
import ServerRoom from '../feature/test/ServerRoomPage';
import Reports from '../feature/test/ReportsPage';
import UserManagement from '../feature/test/UserManagementPage';
import Educations from '../feature/test/EducationsPage';
import Support from '../feature/test/SupportPage';
import Test from '../feature/test/testPage';
import LoginPage from '../feature/login/LoginWithOTP';
import { LoginPage2 } from '../pages/auth/Login';
import CitySensorsInfo from '../feature/test/dashboard/CityServersInfo';
import AddNewSensor from '../feature/test/sensors/AddNewSensor';
import ContentManagement from '../feature/test/ContentManagementPage';

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
                path: "CitySensorsInfo",
                component: CitySensorsInfo,
            },
            {
                path: "sensors",
                component: Sensors,
            },
            {
                path: "add-new-sensor",
                component: AddNewSensor,
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
                path: "user-management",
                component: UserManagement,
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
                path: "content-management",
                component: ContentManagement,
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
        component: LoginPage,
        requiresAuth: true,
    },

];
